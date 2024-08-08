import { H1, MovieInfoWrapper, Overlay } from "../../styles.utils/styles"
import BtnWatchTrailer from "../Buttons/BtnWatchTrailer"
import FeatureLabel from "../Labels/FeatureLabel"
import { Card, P } from './styles'

const FeaturedCard = () => {
  return (
    <Card>
        <MovieInfoWrapper>
           <FeatureLabel/>
            <H1> Deadpool & Wolverine </H1>
            <P>Deadpool recebe uma oferta da Autoridade de Variância Temporal para se juntar ao Universo Cinematográfico Marvel, mas em vez disso recruta uma variante do Wolverine para salvar seu universo da extinção.</P>
            <BtnWatchTrailer/>
        </MovieInfoWrapper>
        <Overlay/>
    </Card>
  )
}

export default FeaturedCard