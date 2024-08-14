import { useEffect, useState } from "react";
import { Arrow, Counter, FilterButton, FilterWrapper, GenresWrapper, HR, ShowMoreBtn } from "./styles";
import GenreBtn from "../Genres/BtnGenres";
import useGenresStore from "../../../store/useGenres.store";
import { IGenre } from "../../../@Types/genres";
import useSelectedGenresStore from "../../../store/useSelectedGenresStore";

const FilterBtn = () => {
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const { selectedGenres } = useSelectedGenresStore();
  const { genres } = useGenresStore();
  const [displayedGenres, setDisplayedGenres] = useState<IGenre[]>([]);
  const [showMore, setShowMore] = useState<boolean>(false);

  const slicedGenres = genres.slice(0, 5);

  const handleShowMore = () => {
    setShowMore(!showMore);

    if (!showMore) {
      setDisplayedGenres(genres);
    } else {
      setDisplayedGenres(slicedGenres);
    }
  };

  useEffect(() => {
    setDisplayedGenres(slicedGenres);
  }, [genres]);

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
          {displayedGenres.map((genre: IGenre) => (
            <GenreBtn key={genre.id} genre={genre} />
          ))}
        </GenresWrapper>
        <ShowMoreBtn onClick={handleShowMore}>
          {showMore ? (
            <>
              Mostrar menos <Arrow src="/icons/arrow_up.png" alt="Arrow up" />
            </>
          ) : (
            <>
              Mostrar mais <Arrow src="/icons/arrow_down.png" alt="Arrow down" />
            </>
          )} </ShowMoreBtn>
        <HR />
      </FilterWrapper>
      )}
    </>
  )
}

export default FilterBtn;