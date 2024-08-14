import { useState } from "react";
import { Counter, FilterButton, FilterWrapper, GenresWrapper, HR } from "./styles";
import GenreBtn from "../Genres/BtnGenres";
import useGenresStore from "../../../store/useGenres.store";
import { IGenre } from "../../../@Types/genres";
import useSelectedGenresStore from "../../../store/useSelectedGenresStore";

const FilterBtn = () => {
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const { selectedGenres } = useSelectedGenresStore();
  const { genres } = useGenresStore();

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
              <GenreBtn key={genre.id} genre={genre}/>
            ))}
          </GenresWrapper>
          <HR />
        </FilterWrapper>
      )}
    </>
  )
}

export default FilterBtn;