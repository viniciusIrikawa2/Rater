import { H3, MovieInfoWrapper, Overlay } from "../../styles.utils/styles";
import BtnWatchTrailer from "../Buttons/BtnWatchTrailer";
import Rating from "../Ratings/Rating";
import { Card } from "./styles";

const MovieCard = () => {
  return (
    <Card>
      <Rating/>
      <MovieInfoWrapper>
        <H3> Divertidamente </H3>
        <BtnWatchTrailer/>
      </MovieInfoWrapper>
      <Overlay/>
    </Card>
  )
}

export default MovieCard;