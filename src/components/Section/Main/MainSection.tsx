import { CardListWrapper } from "../../../styles.utils/styles"
import FeaturedCard from "../../FeaturedCard/FeaturedCard"
import Section from "../Section/Section"
import { MainContainer, MainFeaturedWrapper, SecondaryFeaturedWrapper } from "./styles"

const MainSection = () => {
  return (
    <MainContainer>
        <MainFeaturedWrapper>
            <FeaturedCard/>
        </MainFeaturedWrapper>

        <SecondaryFeaturedWrapper>
            <CardListWrapper direction="column">
                <Section sectionName="Destaques também" direction="column"/>
            </CardListWrapper>
        </SecondaryFeaturedWrapper>
    </MainContainer>
  )
}

export default MainSection