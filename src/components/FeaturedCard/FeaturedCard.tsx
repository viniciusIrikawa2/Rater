import { H1, MovieInfoWrapper, Overlay } from "../../styles.utils/styles"
import BtnWatchTrailer from "../Buttons/BtnWatchTrailer"
import FeatureLabel from "../Labels/FeatureLabel"
import { Card, P, Span, Wrapper } from './styles'
import Rating from "../MovieInfo/Ratings/Rating"
import { convertDurationToHours } from "../../functions/helpers"
import { movieImage } from "../../constants"
import useFetchFeaturedMovie from "../../hooks/useFetchFeaturedMovie"

const FeaturedCard = () => {
  const { movieDetails, genres } = useFetchFeaturedMovie();

  return (
    <Card imageUrl={`${movieImage}${movieDetails?.poster_path}`}>
        <MovieInfoWrapper>
           <FeatureLabel/>
            <H1> {movieDetails?.title} </H1>
            <Wrapper>
              <Rating rating={movieDetails?.vote_average} backgroundColor={false}/> 
              <Span>| {movieDetails?.vote_count} </Span>
              <Span> {convertDurationToHours(movieDetails?.runtime!)} </Span>
              <Span> • {genres} • </Span>
              <Span> {movieDetails?.release_date.substring(0, 4)} </Span>
            </Wrapper>
            <P>{movieDetails?.overview}</P>
            <BtnWatchTrailer/>
        </MovieInfoWrapper>
        <Overlay/>
    </Card>
  )
}

export default FeaturedCard