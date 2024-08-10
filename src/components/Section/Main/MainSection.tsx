import useMovieStore from "../../../store/useMovieStore "
import { CardListWrapper } from "../../../styles.utils/styles"
import FeaturedCard from "../../FeaturedCard/FeaturedCard"
import Section from "../Section/Section"
import { MainContainer, MainFeaturedWrapper, SecondaryFeaturedWrapper } from "./styles"

const MainSection = () => {
  const {movies} = useMovieStore();

  return (
    <MainContainer>
        <MainFeaturedWrapper>
        {movies.length > 0 ? (
          <FeaturedCard movies={movies[0]} />
        ) : (
          <p>Erro ao carregar o filme</p> // Mensagem ou loading enquanto espera os filmes
        )}
        </MainFeaturedWrapper>

        <SecondaryFeaturedWrapper>
            <CardListWrapper direction="column">
                <Section sectionName="Destaques também" direction="column" cardType="movie" movies={movies.slice(1,4)}/>
            </CardListWrapper>
        </SecondaryFeaturedWrapper>
    </MainContainer>
  )
}

export default MainSection