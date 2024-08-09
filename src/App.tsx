import Footer from "./components/Footer/Footer";
import MainSection from "./components/Section/Main/MainSection";
import Section from "./components/Section/Section/Section";

function App() {
  return (
    <>
      <MainSection/>
      <Section sectionName='Últimos lançamentos' direction="row" cardType="movie"/>
      <Section sectionName='Recomendados' direction="row" cardType="movie"/>
      <Section sectionName='Celebridades' direction="row" cardType="celebrity"/>
      <Footer/>
    </>
  )
}

export default App;
