import { useEffect, useState } from "react";
import { CardListWrapper } from "../../../styles.utils/styles";
import CelebritiesCard from "../../CelebritiesCard/CelebritiesCard";
import MovieCard from "../../MovieCard/MovieCard";
import SectionTitle from "../../Title/SectionTitle";
import { SectionContainer } from "./styles";
import { getNowPlayingMovies } from "../../../services/movies/movies";
import { Movie } from "../../@Types/movies";

type Direction = 'row' | 'column';
type CardType = 'movie' | 'celebrity';

interface ISectionNameProps{
  sectionName: string,
  direction: Direction,
  cardType: CardType
}

const Section = ({ sectionName, direction, cardType }: ISectionNameProps) => {
  const [movies, setMovies] = useState<Movie[]>();

  const fetchMovieDetails = async () => {
    try {
      const response = await getNowPlayingMovies();
      setMovies(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <SectionContainer>
        <SectionTitle text={sectionName}/>
        <CardListWrapper direction={direction}>
          {cardType === 'movie' ? (
            <>
              {movies?.map(item => (
                <MovieCard key={item.id} rating={item.vote_average} title={item.title} imageURL={item.poster_path}/>
              ))}
            </>
          ) : (
            <CelebritiesCard/>
          )}
        </CardListWrapper>
    </SectionContainer>
  )
}

export default Section;