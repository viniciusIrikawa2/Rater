import { useEffect, useMemo, useState } from "react"
import { getMovieDetails } from "../../services/movies/movies"
import { H1, MovieInfoWrapper, Overlay } from "../../styles.utils/styles"
import BtnWatchTrailer from "../Buttons/BtnWatchTrailer"
import FeatureLabel from "../Labels/FeatureLabel"
import { Card, P, Span, Wrapper } from './styles'
import { MovieDetails } from "../@Types/movies"
import Rating from "../MovieInfo/Ratings/Rating"

const FeaturedCard = () => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();
  const movieImage = `${import.meta.env.VITE_IMAGE_BASE_URL}w500`;
  const movieID = 533535;
  
  const fetchMovieDetails = async (movieID: number) => {
    try {
      const response = await getMovieDetails(movieID);
      setMovieDetails(response);
    } catch (error) {
      console.log(error);
    }
  };

  const genres = useMemo(() => {
    return movieDetails?.genres.map(genre => genre.name).join(', ')
  }, [movieDetails])

  useEffect(() => {  
     fetchMovieDetails(movieID);
  }, []);

  return (
    <Card imageUrl={`${movieImage}${movieDetails?.poster_path}`}>
        <MovieInfoWrapper>
           <FeatureLabel/>
            <H1> {movieDetails?.title} </H1>
            <Wrapper>
              <Rating rating={movieDetails?.vote_average} backgroundColor={false}/> 
              <Span>| {movieDetails?.vote_count} </Span>
              <Span> {movieDetails?.runtime} </Span>
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