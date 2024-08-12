import { CardListWrapper } from "../../../styles.utils/styles";
import CelebritiesCard from "../../CelebritiesCard/CelebritiesCard";
import MovieCard from "../../MovieCard/MovieCard";
import SectionTitle from "../../Title/SectionTitle";
import { SectionContainer } from "./styles";
import { Movie } from "../../../@Types/movies";
import { Cast } from "../../../@Types/credits";

type Direction = 'row' | 'column';
type CardType = 'movie' | 'celebrity';

interface ISectionNameProps{
  sectionName: string,
  direction: Direction,
  cardType: CardType,
  movies?: Movie[],
  movieCast?: Cast[]
}

const Section = ({ sectionName, direction, cardType, movies, movieCast }: ISectionNameProps) => {
  return (
    <SectionContainer>
        <SectionTitle text={sectionName}/>
        <CardListWrapper direction={direction}>
          {cardType === 'movie' ? (
            <>
              {movies?.map(item => (
                <MovieCard key={item.id} rating={item.vote_average} title={item.title} imageURL={item.poster_path} movieId={item.id}/>
              ))}
            </>
          ) : (
            <CelebritiesCard movieCast={movieCast}/>
          )}
        </CardListWrapper>
    </SectionContainer>
  )
}

export default Section;