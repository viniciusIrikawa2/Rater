import { H3, MovieInfoWrapper, Overlay } from "../../styles.utils/styles";
import BtnWatchTrailer from "../Buttons/BtnWatchTrailer";
import Rating from "../MovieInfo/Ratings/Rating";
import { Card } from "./styles";

const MovieCard = () => {
  return (
    <Card>
      <Rating rating={5.2} backgroundColor={true}/>
      <MovieInfoWrapper>
        <H3> Divertidamente </H3>
        <BtnWatchTrailer/>
      </MovieInfoWrapper>
      <Overlay/>
    </Card>
  )
}

export default MovieCard;