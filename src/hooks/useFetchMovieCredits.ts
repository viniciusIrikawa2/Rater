import { useEffect } from "react";
import { getMovieCredits } from "../services/movies/movies";
import useMovieCreditsStore from "../store/useMovieCreditsStore";

const useFetchMovieCredits = ( movieID: number ) => {
    const { credits, setCredits } = useMovieCreditsStore();

    const fetchCredits = async () => {
        try {
            const response = await getMovieCredits(movieID);
            setCredits(response);
            } catch (error) {
            console.log(error);
        }
    }

    const director = credits?.crew.find((item) => item.known_for_department === 'Directing');
    const writers = credits?.crew.filter((item) => item.known_for_department === 'Writing');
    const actors = credits?.cast.map((item) => item);
    
    useEffect(() => {
        fetchCredits();
    }, [movieID]);

    return { director, writers, actors };
};

export default useFetchMovieCredits;