import { useEffect, useState } from "react"
import { getNowPlayingMovies } from "../../services/movies/movies"
import { H1, MovieInfoWrapper, Overlay } from "../../styles.utils/styles"
import BtnWatchTrailer from "../Buttons/BtnWatchTrailer"
import FeatureLabel from "../Labels/FeatureLabel"
import { Card, P, Wrapper } from './styles'
import { Movie } from "../@Types/movies"
import Rating from "../Ratings/Rating"

const FeaturedCard = () => {
  const [featuredMovie, setFeaturedMovie] = useState<Movie>();
  const movieImage = `${import.meta.env.VITE_IMAGE_BASE_URL}w500`;

  const fetchNowPlayingMovies = async () => {
    try {
      const response = await getNowPlayingMovies();
      setFeaturedMovie(response[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNowPlayingMovies();
  }, [])

  return (
    <Card imageUrl={`${movieImage}${featuredMovie?.poster_path}`}>
        <MovieInfoWrapper>
           <FeatureLabel/>
            <H1> {featuredMovie?.original_title} </H1>
            <Wrapper>
              <Rating rating={featuredMovie?.vote_average} backgroundColor={false}/>
            </Wrapper>
            <P>{featuredMovie?.overview}</P>
            <BtnWatchTrailer/>
        </MovieInfoWrapper>
        <Overlay/>
    </Card>
  )
}

export default FeaturedCard