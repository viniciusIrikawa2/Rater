import { useEffect, useMemo, useState } from "react";
import { MovieDetails } from "../components/@Types/movies";
import { getMovieDetails } from "../services/movies/movies";

const useFetchFeaturedMovie = (movieID: number) => {
    const [movieDetails, setMovieDetails] = useState<MovieDetails>();

    const fetchMovieDetails = async (movieID: number) => {
      try {
        const response = await getMovieDetails(movieID);
        setMovieDetails(response);
      } catch (error) {
        console.log(error);
      }
    };
  
    const genres = useMemo(() => {
      return movieDetails?.genres.map(genre => genre.name).join(', ')
    }, [movieDetails])
  
    useEffect(() => {  
       fetchMovieDetails(movieID);
    }, []);

    return { movieDetails, genres };
};

export default useFetchFeaturedMovie;
