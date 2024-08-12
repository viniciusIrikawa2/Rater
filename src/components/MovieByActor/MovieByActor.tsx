import { movieImage } from "../../constants";
import Rating from "../MovieInfo/Ratings/Rating";
import { Character, Image, MovieInfo, MovieTitle, Wrapper, Year } from "./styles";

interface MovieProps {
    imageUrl: string | null,
    movieTitle: string,
    rating: number,
    character: string,
    year: string,
}

const MovieByActor = ({ imageUrl, movieTitle, rating, character, year }: MovieProps) => {
  return (
    <Wrapper>
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