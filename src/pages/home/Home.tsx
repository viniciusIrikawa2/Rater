import MainSection from "../../components/Section/Main/MainSection";
import Section from "../../components/Section/Section/Section";

const Home = () => {
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