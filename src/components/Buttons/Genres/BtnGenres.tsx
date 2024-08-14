import { Button } from "./styles";
import { IGenre } from "../../../@Types/genres";

interface IGenreProps {
    genre: IGenre;
    selectedGenres: IGenre[];
    setSelectedGenres: (genre: IGenre[]) => void;
}

const GenreBtn = ({ genre, selectedGenres, setSelectedGenres }: IGenreProps) => {
  const isSelected = selectedGenres.some((g) => g.id === genre.id);

  const handleSelectButton = () => {
    if(isSelected) {
      setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id));
    }else {
      setSelectedGenres([
        ...selectedGenres,
        {
          id: genre.id,
          name: genre.name
        }
      ]);
    }
  }
  
  return (
    <Button onClick={handleSelectButton} isSelected={isSelected}>
      {genre.name}
    </Button>
  )
}


export default GenreBtn;