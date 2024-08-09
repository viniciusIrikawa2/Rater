import { CardListWrapper } from "../../../styles.utils/styles";
import CelebritiesCard from "../../CelebritiesCard/CelebritiesCard";
import MovieCard from "../../MovieCard/MovieCard";
import SectionTitle from "../../Title/SectionTitle";
import { SectionContainer } from "./styles";

type Direction = 'row' | 'column';
type CardType = 'movie' | 'celebrity';

interface ISectionNameProps{
  sectionName: string,
  direction: Direction,
  cardType: CardType
}

const Section = ({ sectionName, direction, cardType }: ISectionNameProps) => {
  return (
    <SectionContainer>
        <SectionTitle text={sectionName}/>
        <CardListWrapper direction={direction}>
          {cardType === 'movie' ? (
            <>
              <MovieCard/>
              <MovieCard/>
            </>
          ) : (
            <CelebritiesCard/>
          )}
        </CardListWrapper>
    </SectionContainer>
  )
}

export default Section;