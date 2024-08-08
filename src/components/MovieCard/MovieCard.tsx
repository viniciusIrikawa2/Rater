import BtnWatchTrailer from "../Buttons/BtnWatchTrailer";
import { Card, H3, MovieInfoWrapper, Overlay } from "./styles";

const MovieCard = () => {
  return (
    <Card>
      <MovieInfoWrapper>
        <H3> Divertidamente </H3>
        <BtnWatchTrailer/>
      </MovieInfoWrapper>
      <Overlay></Overlay>
    </Card>
  )
}

export default MovieCard;