import MainSection from "../../components/Section/Main/MainSection";
import Section from "../../components/Section/Section/Section";
import useFetchGenres from "../../hooks/useFetchGenres";
import useFetchNowPlayingMovies from "../../hooks/useFetchNowPlayingMovies";
import useMovieStore from "../../store/useMovieStore ";

const Home = () => {
  const {movies} = useMovieStore();
  useFetchNowPlayingMovies();
  useFetchGenres();

  return (
    <>
      <MainSection/>
      <Section sectionName='Últimos lançamentos' direction="row" cardType="movie" movies={movies.slice(4, movies.length)}/>
      <Section sectionName='Recomendados' direction="row" cardType="movie" movies={movies}/>
      <Section sectionName='Celebridades' direction="row" cardType="celebrity" movies={movies}/>
    </>
  )
}

export default Home;