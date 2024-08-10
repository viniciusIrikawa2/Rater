import { Movie, MovieDetails } from "../../components/@Types/movies";
import { BASEURL } from "../axiosBaseUrl"

interface NowPlayingResponse {
    results: Movie[];
}

export const getNowPlayingMovies = async (): Promise<Movie[]> => {
    try {
        const response = await BASEURL.get<NowPlayingResponse>('/movie/now_playing?language=pt-BR');
        return response.data.results.slice(0,4);
    } catch (error) {
        throw new Error('Erro na requisição');
    }
}

export const getMovieDetails = async (movieID: number): Promise<MovieDetails> => {
    try {
        const response = await BASEURL.get<MovieDetails>(`/movie/${movieID}?language=pt-BR`);
        return response.data;
    } catch (error) {
        throw new Error('Erro na requisição');
    }
};

export const getMovieCredits = async (movieID: number) => {
    try {
        const response = await BASEURL.get(`movie/${movieID}/credits`);
        return response.data;
    } catch (error) {
        throw new Error('Erro na requisição');
    }
};