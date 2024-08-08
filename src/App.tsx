import MainSection from "./components/Section/Main/MainSection";
import Section from "./components/Section/Section/Section";

function App() {
  return (
    <>
      <MainSection/>
      <Section sectionName='Últimos lançamentos' direction="row"/>
      <Section sectionName='Recomendados' direction="row"/>
      <Section sectionName='Celebridades' direction="row"/>
    </>
  )
}

export default App;
