import { useNavigate } from "react-router-dom";
import { movieImage } from "../../constants";
import Rating from "../MovieInfo/Ratings/Rating";
import { Character, Image, MovieInfo, MovieTitle, Wrapper, Year } from "./styles";

interface MovieProps {
    movieID: number | string,
    imageUrl: string | null,
    movieTitle: string,
    rating: number,
    character: string,
    year: string,
}

const MovieByActor = ({ movieID, imageUrl, movieTitle, rating, character, year }: MovieProps) => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`/movie/${movieID.toString()}`)}>
        <Image src={`${movieImage}${imageUrl}`} alt={''}/>
        <MovieInfo>
            <MovieTitle>{movieTitle}</MovieTitle>
            <Rating backgroundColor={false} rating={rating}/>
            <Character> {character} </Character>
            <Year>{year}</Year>
        </MovieInfo>
    </Wrapper>
  )
}

export default MovieByActor;