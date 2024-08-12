import { useMemo, useState } from "react";
import { 
  FilterButton, 
  FilterWrapper, 
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

const FilterBar = () => {
  const [search, setSearch] = useState<string>('');
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const {movies} = useMovieStore();
  const navigate = useNavigate();

  const handleChange = (value: string) => {
    setSearch(value);
  }

  const filteredMovies =  useMemo(() => (
      movies.filter((movie: Movie) => 
         movie.title.toLowerCase().includes(search.toLowerCase())
      )  
  ), [search, movies]);

  const handleBlur = () => setSearch('');

  return (
    <InputWrapper>
        <Input placeholder="Pesquisar..." 
               onChange={(evt) => handleChange(evt.target.value)} 
               onBlur={handleBlur}
               value={search}/>
        <FilterButton onClick={() => setFilterIsOpen(!filterIsOpen)}
                      onBlur={() => setFilterIsOpen(false)}> 
          <img src="/icons/filter.png"/>
        </FilterButton>
        {search.length !== 0 && (
          <SearchResultsWrapper>
            <small>Resultados: {filteredMovies.length} </small>
            {filteredMovies.map((item: Movie) => (
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
        {filterIsOpen && (
          <FilterWrapper>
             <small> Gêneros cinematográficos </small>
          </FilterWrapper>
        )}
    </InputWrapper>
  )
}

export default FilterBar;