import { useEffect, useState } from "react";
import { Movie } from "../components/@Types/movies";
import { getNowPlayingMovies } from "../services/movies/movies";

const useFetchNowPlayingMovies = () => {
    const [movies, setMovies] = useState<Movie[]>();

    const fetchMovies = async () => {
      try {
        const response = await getNowPlayingMovies();
        setMovies(response);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchMovies();
    }, []);
  
    return {movies};
};

export default useFetchNowPlayingMovies;