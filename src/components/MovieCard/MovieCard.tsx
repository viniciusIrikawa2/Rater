import { H3, MovieInfoWrapper, Overlay } from "../../styles.utils/styles";
import BtnWatchTrailer from "../Buttons/BtnWatchTrailer";
import Rating from "../MovieInfo/Ratings/Rating";
import { Card } from "./styles";

interface CardProps {
  rating: number
  title: string
  imageURL: string
}

const MovieCard = ({ rating, title, imageURL }: CardProps) => {
  const movieImage = `${import.meta.env.VITE_IMAGE_BASE_URL}w200`;

  return (
    <Card imageURL={`${movieImage}${imageURL}`}>
      <Rating rating={rating} backgroundColor={true}/>
      <MovieInfoWrapper>
        <H3> {title} </H3>
        <BtnWatchTrailer/>
      </MovieInfoWrapper>
      <Overlay/>
    </Card>
  )
}

export default MovieCard;