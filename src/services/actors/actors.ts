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

