import { useEffect, useState } from "react";
import { H2 } from "../../components/Title/styles";
import { ActorWrapper, Container, Movies, MovieWrapper } from "./styles";
import { getMoviesByActor } from "../../services/actors/actors";
import { useParams } from "react-router-dom";
import MovieByActor from "../../components/MovieByActor/MovieByActor";
import { Movie } from "../../@Types/movies";

const ActorPage = () => {
  const [movies, setMovies] = useState<any>([]);
  const { id } = useParams();

  const fetchMoviesByActor = async () => {
    try {
      const response = await getMoviesByActor(Number(id));
      setMovies(response.cast)
    } catch (error) {
      console.log(error);     
    }
  };

  useEffect(() => {
    fetchMoviesByActor();
  }, []);

  return (
    <Container>
        <MovieWrapper> 
          <H2> Filmes e séries </H2>
          <Movies>
            {movies.map((movie: Movie) => (
               <MovieByActor key={movie.id}
                imageUrl={movie.poster_path} 
                movieTitle={movie.title} 
                rating={movie.vote_average}
                character={movie.character!}
                year={movie.release_date.substring(0, 4)}
              /> 
            ))}
          </Movies>
        </MovieWrapper>
        <ActorWrapper> actor wrapper </ActorWrapper>
    </Container>
  )
}

export default ActorPage;