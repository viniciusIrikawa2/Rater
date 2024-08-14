import { useEffect, useState } from "react";
import { Counter, FilterButton, FilterWrapper, GenresWrapper, HR } from "./styles";
import GenreBtn from "../Genres/BtnGenres";
import useGenresStore from "../../../store/useGenres.store";
import { IGenre } from "../../../@Types/genres";
import { filterByGenres } from "../../../services/movies/movies";

const FilterBtn = () => {
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const [selectedGenres, setSelectedGenres] = useState<IGenre[]>([]);
  const { genres } = useGenresStore();
  
  const fetchByGenres = async () => {
    const genresIDs = selectedGenres.map(genre => genre.id).join(','); 
 
    try {
      const response = await filterByGenres(genresIDs);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchByGenres();
  }, [selectedGenres]);
  
  return (
    <>
      <FilterButton onClick={() => setFilterIsOpen(!filterIsOpen)}>
        <img src="/icons/filter.png" />
        <Counter>
          {selectedGenres.length}
        </Counter>
      </FilterButton>

      {filterIsOpen && (
        <FilterWrapper onMouseLeave={() => setFilterIsOpen(false)}>
          <p>
            <small> Gêneros cinematográficos </small>
          </p>
          <GenresWrapper>
            {genres.map((genre: IGenre) => (
              <GenreBtn key={genre.id} genre={genre} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
            ))}
          </GenresWrapper>
          <HR />
        </FilterWrapper>
      )}
    </>
  )
}

export default FilterBtn;