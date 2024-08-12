import { Credits } from "../../@Types/credits";
import { BASEURL } from "../axiosBaseUrl";

export const getActors = async () => {
    try {
        const response = await BASEURL.get('/person/popular');
       return response.data.results;
    } catch (error) {
        throw new Error('Erro na requisição');
    }
};

export const getActorDetails = async (actorId: number) => {
    try {
        const response = await BASEURL.get(`/person/${actorId}`);       
        return response.data;
    } catch (error) {
        throw new Error('Erro na requisição');
    }
};

export const getMoviesByActor = async (actorId: number): Promise<Credits> => {
    try {
        const response = await BASEURL.get(`/person/${actorId}/movie_credits?language=pt-BR`);
        return response.data;
    } catch (error) {
        throw new Error('Erro na requisição');
    }
};

