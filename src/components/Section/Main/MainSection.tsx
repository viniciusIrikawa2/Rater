import { Movie } from "../../../@Types/movies"
import useMovieStore from "../../../store/useMovieStore "
import { CardListWrapper, DesktopView, MobileView } from "../../../styles.utils/styles"
import FeaturedCard from "../../FeaturedCard/FeaturedCard"
import FeaturedCardMobile from "../../FeaturedCard/MobileView/FeaturedCardMobile"
import MovieCard from "../../MovieCard/MovieCard"
import SectionTitle from "../../Title/SectionTitle"
import Section from "../Section/Section"
import { MainContainer, MainFeaturedWrapper, SecondaryFeaturedWrapper } from "./styles"

const MainSection = () => {
  const {movies} = useMovieStore();

  return (
    <MainContainer>
        <MainFeaturedWrapper>
          {movies.length > 0 ? (
            <>
              <DesktopView>
                <FeaturedCard movies={movies[0]} />
              </DesktopView>
              <MobileView>
                <FeaturedCardMobile movies={movies[0]}/>
              </MobileView>
            </>
          ) : (
            <p>Erro ao carregar o filme</p>
          )}
        </MainFeaturedWrapper>

        <SecondaryFeaturedWrapper>
          <DesktopView>
            <SectionTitle text="Destaques também"/>
            <CardListWrapper direction="column">
                {movies.slice(1,4).map((movie: Movie) => (
                  <MovieCard key={movie.id} rating={movie.vote_average} title={movie.title} imageURL={movie.poster_path} movieId={movie.id}/>
                ))}
            </CardListWrapper>
          </DesktopView>
          <MobileView>
            <Section sectionName='Últimos lançamentos' direction="row" cardType="movie" movies={movies.slice(1,4)}/>
          </MobileView>
        </SecondaryFeaturedWrapper>
    </MainContainer>
  )
}

export default MainSection