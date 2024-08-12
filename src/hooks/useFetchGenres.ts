import { useEffect, useState } from "react";
import { getGenres } from "../services/movies/movies";
import { IGenre } from "../@Types/genres";

const useFetchGenres = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);

    const fetchGenres = async () => {
        try {
            const response = await getGenres();
            setGenres(response);
        } catch (error) {
            console.log(error);            
        }
    };  

    useEffect(() => {
        fetchGenres();
    }, []);
};

export default useFetchGenres;