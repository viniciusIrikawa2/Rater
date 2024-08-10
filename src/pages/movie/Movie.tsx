import { useParams } from "react-router-dom";
import { BannerSection } from "./styles";
import useFetchFeaturedMovie from "../../hooks/useFetchFeaturedMovie";
import { movieImage } from "../../constants";
import { Overlay } from "../../styles.utils/styles";
import BtnWatchTrailer from "../../components/Buttons/BtnWatchTrailer";
import Genre from "../../components/Labels/GenreLabel/Genre";

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
        </>
    )
}

export default Movie;