import { H1, MovieInfoWrapper, Overlay } from "../../styles.utils/styles"
import BtnWatchTrailer from "../Buttons/WatchTrailer/BtnWatchTrailer"
import FeatureLabel from "../Labels/FeaturedLabel/FeatureLabel"
import { Card, P, Span, Wrapper } from './styles'
import Rating from "../MovieInfo/Ratings/Rating"
import { convertDurationToHours } from "../../functions/helpers"
import { movieImage } from "../../constants"
import useFetchFeaturedMovie from "../../hooks/useFetchFeaturedMovie"
import { Movie } from "../../@Types/movies"

interface IMovieProps{
  movies: Movie
}

const FeaturedCard = ({ movies }: IMovieProps) => {
  const movieID = movies.id;  
  const { movieDetails, genres } = useFetchFeaturedMovie(movieID);

  return (
    <Card imageUrl={`${movieImage}${movies.poster_path}`}>
        <MovieInfoWrapper>
           <FeatureLabel/>
            <H1> {movies?.title} </H1>
            <Wrapper>
              <Rating rating={movies?.vote_average} backgroundColor={false}/> 
              <Span>| {movies?.vote_count} </Span>
              <Span> {convertDurationToHours(movieDetails?.runtime!)} </Span>
              <Span> • {genres} • </Span>
              <Span> {movies?.release_date.substring(0, 4)} </Span>
            </Wrapper>
            <P>{movies?.overview}</P>
            <BtnWatchTrailer url={`/movie/${movieID}`}/>
        </MovieInfoWrapper>
        <Overlay/>
    </Card>
  )
}

export default FeaturedCard;