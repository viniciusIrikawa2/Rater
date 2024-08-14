import { useEffect, useMemo, useState } from "react";
import { 
  Image, 
  Input, 
  InputWrapper, 
  MovieInfo, 
  MovieTitle, 
  ResultItem, 
  SearchResultsWrapper, 
  Year
 } from "./styles";
import useMovieStore from "../../store/useMovieStore ";
import { Movie } from "../../@Types/movies";
import { movieImage } from "../../constants";
import { useNavigate } from "react-router-dom";
import Rating from "../MovieInfo/Ratings/Rating";
import FilterBtn from "../Buttons/Filter/FilterBtn";
import useSelectedGenresStore from "../../store/useSelectedGenresStore";
import { filterByGenres } from "../../services/movies/movies";

const FilterBar = () => {
  const { selectedGenres } = useSelectedGenresStore();
  const [search, setSearch] = useState<string>('');
  const {movies} = useMovieStore();
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();

  const handleChange = (value: string) => {
    setSearch(value);
  }

const fetchMoviesByGenres = async () => {
  const genresIDs = selectedGenres.map(genre => genre.id).join(','); 

  try {
    const response = await filterByGenres(genresIDs);
    setFilteredMovies(response);
  } catch (error) {
    console.log(error);
  }
};

  const handleBlur = () => {
    setTimeout(() => {
      setSearch('');
    }, 200)
  };

  useEffect(() => {
    if (selectedGenres.length > 0) {
      fetchMoviesByGenres();
    } else {
      setFilteredMovies([]);
    }
  }, [selectedGenres]);

  const displayedMovies = useMemo(() => {
    const moviesToDisplay = filteredMovies.length > 0 ? filteredMovies : movies;
    return moviesToDisplay.filter((movie) => {
      const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
      return matchesSearch;
    });
  }, [search, movies, filteredMovies]);

  return (
    <InputWrapper>
        <Input placeholder="Pesquisar..." 
               onChange={(evt) => handleChange(evt.target.value)} 
               onBlur={handleBlur}
               value={search}/>
        {search.length !== 0 && (
          <SearchResultsWrapper>
            <small>Resultados: {displayedMovies.length} </small>
            {displayedMovies.map((item: Movie) => (
              <ResultItem onClick={() => navigate(`/movie/${item.id}`)}>
                <Image src={`${movieImage}${item.poster_path}`}/>
                <MovieInfo>
                  <MovieTitle> {item.title} </MovieTitle>
                  <Year> {item.release_date.substring(0, 4)} </Year>
                </MovieInfo>
                <Rating backgroundColor={false} rating={item.vote_average}/>
              </ResultItem>
            ))}
          </SearchResultsWrapper>
        )}
        <FilterBtn/>
    </InputWrapper>
  )
}

export default FilterBar;