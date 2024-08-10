import { CardListWrapper } from "../../../styles.utils/styles";
import CelebritiesCard from "../../CelebritiesCard/CelebritiesCard";
import MovieCard from "../../MovieCard/MovieCard";
import SectionTitle from "../../Title/SectionTitle";
import { SectionContainer } from "./styles";
import useMovieStore from "../../../store/useMovieStore ";

type Direction = 'row' | 'column';
type CardType = 'movie' | 'celebrity';

interface ISectionNameProps{
  sectionName: string,
  direction: Direction,
  cardType: CardType
}

const Section = ({ sectionName, direction, cardType }: ISectionNameProps) => {
  const { movies } = useMovieStore();

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