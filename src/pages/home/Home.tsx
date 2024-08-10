import MainSection from "../../components/Section/Main/MainSection";
import Section from "../../components/Section/Section/Section";
import useFetchNowPlayingMovies from "../../hooks/useFetchNowPlayingMovies";

const Home = () => {
  useFetchNowPlayingMovies();

  return (
    <>
      <MainSection/>
      <Section sectionName='Últimos lançamentos' direction="row" cardType="movie"/>
      <Section sectionName='Recomendados' direction="row" cardType="movie"/>
      <Section sectionName='Celebridades' direction="row" cardType="celebrity"/>
    </>
  )
}

export default Home;