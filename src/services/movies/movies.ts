import { Movie } from "../../components/@Types/movies";
import { BASEURL } from "../axiosBaseUrl"

interface NowPlayingResponse {
    results: Movie[];
}

export const getNowPlayingMovies = async (): Promise<Movie[]> => {
    try {
        const response = await BASEURL.get<NowPlayingResponse>('/movie/now_playing');
        return response.data.results; 
    } catch (error) {
        throw new Error('Erro na requisição');
    }
}