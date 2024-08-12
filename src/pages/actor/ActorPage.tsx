import { useEffect, useState } from "react";
import { H2 } from "../../components/Title/styles";
import { ActorImage, ActorWrapper, Container, InfoWrapper, Movies, MovieWrapper, P, Span } from "./styles";
import { getActorDetails, getMoviesByActor } from "../../services/actors/actors";
import { useParams } from "react-router-dom";
import MovieByActor from "../../components/MovieByActor/MovieByActor";
import { Movie } from "../../@Types/movies";
import { Actor } from "../../@Types/actors";
import { actorImage } from "../../constants";
import { H3 } from "../../styles.utils/styles";
import { normalizeBirthDate } from "../../functions/helpers";

const ActorPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [actorDetails, setActorDetails] = useState<Actor>();
  const { id } = useParams();

  const fetchMoviesByActor = async () => {
    try {
      const response = await getMoviesByActor(Number(id));
      setMovies(response.cast)
    } catch (error) {
      console.log(error);     
    }
  };

  const fetchActorDetails = async () => {
    try {
      const response = await getActorDetails(Number(id));
      setActorDetails(response)
    } catch (error) {
      console.log(error);     
    }
  };

  useEffect(() => {
    fetchMoviesByActor();
    fetchActorDetails();
  }, []);

  return (
    <Container>
        <MovieWrapper> 
          <H2> Filmes e séries </H2>
          <Movies>
            {movies.map((movie: Movie) => (
               <MovieByActor key={movie.id}
                movieID={movie.id}
                imageUrl={movie.poster_path} 
                movieTitle={movie.title} 
                rating={movie.vote_average}
                character={movie.character!}
                year={movie.release_date.substring(0, 4)}
              /> 
            ))}
          </Movies>
        </MovieWrapper>
        <ActorWrapper> 
          <ActorImage src={`${actorImage}${actorDetails?.profile_path}`} alt={actorDetails?.name}/>
          <H3> {actorDetails?.name} </H3>
          <InfoWrapper>
            <Span> Nascido(a) em: </Span>
            <P> {normalizeBirthDate(actorDetails?.birthday!)} </P>
          </InfoWrapper>
          <InfoWrapper>
            <Span> Origem: </Span>
            <P> {actorDetails?.place_of_birth} </P>
          </InfoWrapper>
          <InfoWrapper>
            <Span> Sobre: </Span>
            <P> {actorDetails?.biography} </P>
          </InfoWrapper>
        </ActorWrapper>
    </Container>
  )
}

export default ActorPage;