import { CardListWrapper } from "../../../styles.utils/styles";
import MovieCard from "../../MovieCard/MovieCard";
import SectionTitle from "../../Title/SectionTitle";
import { SectionContainer } from "./styles";

type Direction = 'row' | 'column';

interface ISectionNameProps{
  sectionName: string,
  direction: Direction
}

const Section = ({ sectionName, direction }: ISectionNameProps) => {
  return (
    <SectionContainer>
        <SectionTitle text={sectionName}/>
        <CardListWrapper direction={direction}>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </CardListWrapper>
    </SectionContainer>
  )
}

export default Section;