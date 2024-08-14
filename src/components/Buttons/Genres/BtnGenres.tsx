import { Button } from "./styles";
import { IGenre } from "../../../@Types/genres";
import useSelectedGenresStore from "../../../store/useSelectedGenresStore";

interface IGenreProps {
    genre: IGenre;
}

const GenreBtn = ({ genre }: IGenreProps) => {
  const { selectedGenres, setSelectedGenres } = useSelectedGenresStore();
  const isSelected = selectedGenres.some((g) => g.id === genre.id);

  const handleSelectButton = () => {
    setSelectedGenres(genre);
  }
  
  return (
    <Button onClick={handleSelectButton} isSelected={isSelected}>
      {genre.name}
    </Button>
  )
}


export default GenreBtn;