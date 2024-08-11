import { useEffect, useState } from "react";
import { getMovieCredits } from "../services/movies/movies";
import { Credits } from "../@Types/credits";

const useFetchMovieCredits = ( movieID: number ) => {
    const [credits, setCredits] = useState<Credits>();

    const fetchCredits = async () => {
        try {
            const response = await getMovieCredits(movieID);
            setCredits(response);
            } catch (error) {
            console.log(error);
        }
    }

    const director = credits?.crew.find((item) => item.known_for_department === 'Directing');
    const writers = credits?.crew.filter((item) => item.known_for_department === 'Writing').slice(0,4);
    const actors = credits?.cast.map((item) => item).slice(0, 4);
    
    useEffect(() => {
        fetchCredits();
    }, []);

    return { director, writers, actors };
};

export default useFetchMovieCredits;