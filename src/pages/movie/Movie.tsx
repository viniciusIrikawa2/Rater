import { useParams } from "react-router-dom";
import { BannerSection } from "./styles";
import useFetchFeaturedMovie from "../../hooks/useFetchFeaturedMovie";
import { movieImage } from "../../constants";
import { Overlay } from "../../styles.utils/styles";
import BtnWatchTrailer from "../../components/Buttons/BtnWatchTrailer";

const Movie = () => {
    const { id } = useParams();
    
    const { movieDetails } = useFetchFeaturedMovie(Number(id));
    console.log(movieDetails);

    return (
        <BannerSection backgroundImg={`${movieImage}/${movieDetails?.poster_path}`}>
            <BtnWatchTrailer url="#"/>
            <Overlay/>
        </BannerSection>
    )
}

export default Movie;