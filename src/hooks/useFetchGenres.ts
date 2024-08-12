import { useEffect } from "react";
import { getGenres } from "../services/movies/movies";
import useGenresStore from "../store/useGenres.store";

const useFetchGenres = () => {
    const { setGenres } = useGenresStore();

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