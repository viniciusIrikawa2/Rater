import { useEffect, useState } from "react";
import { getRecommendations } from "../services/movies/movies";
import { MovieRecommendation } from "../@Types/movies";

const useFecthRecommendations = (movieID: number) => {
    const [recommendations, setRecommendations] = useState<MovieRecommendation[]>([]);

    const fetchRecommendations = async () => {
        try {
            const response = await getRecommendations(movieID);
            setRecommendations(response);
        } catch (error) {
            console.log(error);            
        }
    };

    useEffect(() => {
        fetchRecommendations();
    }, [movieID]);

    return { recommendations };
};

export default useFecthRecommendations;