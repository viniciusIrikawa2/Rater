import { useState } from "react";
import { Button } from "./styles";

interface IGenreProps {
    genre: string
}

const GenreBtn = ({ genre }: IGenreProps) => {
  const [isSelected, setIsSelected] = useState(false);
  
  const handleSelectButton = () => {
    setIsSelected((prev) => !prev);
  }
  

  return (
    <Button onClick={handleSelectButton} isSelected={isSelected}>{genre}</Button>
  )
}


export default GenreBtn;