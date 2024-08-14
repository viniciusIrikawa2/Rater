import { useState } from "react";
import { FilterButton, FilterWrapper, GenresWrapper, HR } from "./styles";
import GenreBtn from "../Genres/BtnGenres";
import useGenresStore from "../../../store/useGenres.store";
import { IGenre } from "../../../@Types/genres";

const FilterBtn = () => {
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const { genres } = useGenresStore();

  return (
    <>
      <FilterButton onClick={() => setFilterIsOpen(!filterIsOpen)}>
        <img src="/icons/filter.png" />
      </FilterButton>

      {filterIsOpen && (
        <FilterWrapper onMouseLeave={() => setFilterIsOpen(false)}>
          <p>
            <small> Gêneros cinematográficos </small>
          </p>
          <GenresWrapper>
            {genres.map((genre: IGenre) => (
              <GenreBtn key={genre.id} genre={genre.name} />
            ))}
          </GenresWrapper>
          <HR />
        </FilterWrapper>
      )}
    </>
  )
}

export default FilterBtn;