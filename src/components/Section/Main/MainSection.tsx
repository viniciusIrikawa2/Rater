import { Movie } from "../../../@Types/movies"
import useMovieStore from "../../../store/useMovieStore "
import { CardListWrapper } from "../../../styles.utils/styles"
import FeaturedCard from "../../FeaturedCard/FeaturedCard"
import MovieCard from "../../MovieCard/MovieCard"
import SectionTitle from "../../Title/SectionTitle"
import { MainContainer, MainFeaturedWrapper, SecondaryFeaturedWrapper } from "./styles"

const MainSection = () => {
  const {movies} = useMovieStore();

  return (
    <MainContainer>
        <MainFeaturedWrapper>
          {movies.length > 0 ? (
            <FeaturedCard movies={movies[0]} />
          ) : (
            <p>Erro ao carregar o filme</p>
          )}
        </MainFeaturedWrapper>

        <SecondaryFeaturedWrapper>
          <SectionTitle text="Destaques também"/>
            <CardListWrapper direction="column">
              {movies.slice(1,4).map((movie: Movie) => (
                <MovieCard key={movie.id} rating={movie.vote_average} title={movie.title} imageURL={movie.poster_path} movieId={movie.id}/>
              ))}
            </CardListWrapper>
        </SecondaryFeaturedWrapper>
    </MainContainer>
  )
}

export default MainSection