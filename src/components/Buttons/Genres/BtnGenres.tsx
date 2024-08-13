import { Button } from "./styles";

interface IGenreProps {
    genre: string
}

const GenreBtn = ({ genre }: IGenreProps) => {
  return (
    <Button>{genre}</Button>
  )
}


export default GenreBtn;