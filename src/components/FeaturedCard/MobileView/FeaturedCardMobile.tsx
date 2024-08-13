import { Movie } from "../../../@Types/movies";
import { movieImage } from "../../../constants";
import { H1, Overlay } from "../../../styles.utils/styles";
import BtnWatchTrailer from "../../Buttons/WatchTrailer/BtnWatchTrailer";
import Rating from "../../MovieInfo/Ratings/Rating";
import { P } from "../styles";
import { Card, MovieInfoWrapper } from "./styles";

interface IMovieProps {
    movies: Movie;
}

const FeaturedCardMobile = ({ movies }: IMovieProps) => {
    const movieID = movies.id;

    return (
        <Card imageUrl={`${movieImage}${movies.poster_path}`}>
            <Rating rating={movies?.vote_average} backgroundColor={false} />
            <MovieInfoWrapper>
                <H1> {movies?.title} </H1>
                <P>{movies?.overview}</P>
                <BtnWatchTrailer url={`/movie/${movieID}`} />
            </MovieInfoWrapper>
            <Overlay />
        </Card>
    )
}

export default FeaturedCardMobile;