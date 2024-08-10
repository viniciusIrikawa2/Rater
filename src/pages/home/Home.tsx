import MainSection from "../../components/Section/Main/MainSection";
import Section from "../../components/Section/Section/Section";
import useFetchNowPlayingMovies from "../../hooks/useFetchNowPlayingMovies";
import useMovieStore from "../../store/useMovieStore ";

const Home = () => {
  const {movies} = useMovieStore();
  useFetchNowPlayingMovies();

  return (
    <>
      <MainSection/>
      <Section sectionName='Últimos lançamentos' direction="row" cardType="movie" movies={movies}/>
      <Section sectionName='Recomendados' direction="row" cardType="movie" movies={movies}/>
      <Section sectionName='Celebridades' direction="row" cardType="celebrity" movies={movies}/>
    </>
  )
}

export default Home;