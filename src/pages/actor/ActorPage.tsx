import { H2 } from "../../components/Title/styles";
import { ActorWrapper, Container, MovieWrapper } from "./styles";

const ActorPage = () => {
  return (
    <Container>
        <MovieWrapper> 
          <H2> Filmes e séries </H2>
        </MovieWrapper>
        <ActorWrapper> actor wrapper </ActorWrapper>
    </Container>
  )
}

export default ActorPage;