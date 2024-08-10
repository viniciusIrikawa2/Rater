import { Label } from "./styles";

interface IGenreProps {
    genre: string
}

const Genre = ({ genre }: IGenreProps) => {
  return (
    <Label>{genre}</Label>
  )
}

export default Genre;