import { movieImage } from "../../constants";
import { H3, MovieInfoWrapper, Overlay } from "../../styles.utils/styles";
import BtnWatchTrailer from "../Buttons/WatchTrailer/BtnWatchTrailer";
import Rating from "../MovieInfo/Ratings/Rating";
import { Card } from "./styles";

interface CardProps {
  rating: number
  title: string
  imageURL: string,
  movieId: number,
}

const MovieCard = ({ rating, title, imageURL, movieId }: CardProps) => {
  return (
    <Card imageURL={`${movieImage}${imageURL}`}>
      <Rating rating={rating} backgroundColor={true}/>
      <MovieInfoWrapper>
        <H3> {title} </H3>
        <BtnWatchTrailer url={`/movie/${movieId}`}/>
      </MovieInfoWrapper>
      <Overlay/>
    </Card>
  )
}

export default MovieCard;