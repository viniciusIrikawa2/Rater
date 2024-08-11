import { useParams } from "react-router-dom";
import { BannerSection, MovieInfoSection, Span, Wrapper, WrapperTitle } from "./styles";
import useFetchFeaturedMovie from "../../hooks/useFetchFeaturedMovie";
import { movieImage } from "../../constants";
import { H1, Overlay } from "../../styles.utils/styles";
import BtnWatchTrailer from "../../components/Buttons/BtnWatchTrailer";
import Genre from "../../components/Labels/GenreLabel/Genre";
import Rating from "../../components/MovieInfo/Ratings/Rating";
import { convertDurationToHours } from "../../functions/helpers";
import { P } from "../../components/FeaturedCard/styles";
import Cast from "../../components/Cast/Cast";

const Movie = () => {
    const { id } = useParams();
    const { movieDetails } = useFetchFeaturedMovie(Number(id));

    return (
        <>
            <BannerSection backgroundImg={`${movieImage}/${movieDetails?.poster_path}`}>
                <BtnWatchTrailer url="#"/>
                <Overlay/>
            </BannerSection>
            <div>
                {movieDetails?.genres.map(genre => (
                    <Genre genre={genre.name}/>
                ))}
            </div>
            <MovieInfoSection>
                <Wrapper width='60%'>
                    <WrapperTitle>
                        <H1> {movieDetails?.title} </H1>
                        <Rating rating={movieDetails?.vote_average} backgroundColor={false}/>
                        <Span>| {movieDetails?.vote_count} </Span>
                    </WrapperTitle>
                    <Span> 
                        {convertDurationToHours(movieDetails?.runtime!)} • {movieDetails?.release_date.substring(0, 4)}
                    </Span>
                    <P>{movieDetails?.overview}</P>
                </Wrapper>
                <Wrapper width='40%'>
                    {/* <Cast castType={}> */}
                </Wrapper>
            </MovieInfoSection>
        </>
    )
}

export default Movie;