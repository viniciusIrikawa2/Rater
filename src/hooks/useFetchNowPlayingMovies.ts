import { useEffect } from "react";
import { getNowPlayingMovies } from "../services/movies/movies";
import useMovieStore from "../store/useMovieStore ";

const useFetchNowPlayingMovies = () => {
    const {setMovies} = useMovieStore();

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
};

export default useFetchNowPlayingMovies;