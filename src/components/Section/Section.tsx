import { CardListWrapper } from "../../styles.utils/styles";
import MovieCard from "../MovieCard/MovieCard";
import SectionTitle from "../Title/SectionTitle";
import { SectionContainer } from "./styles";

interface ISectionNameProps{
  sectionName: string
}

const Section = ({ sectionName }: ISectionNameProps) => {
  return (
    <SectionContainer>
        <SectionTitle text={sectionName}/>
        <CardListWrapper>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </CardListWrapper>
    </SectionContainer>
  )
}

export default Section;