import { BASEURL } from "../axiosBaseUrl";

export const getActors = async () => {
    try {
        const response = await BASEURL.get('/person/popular');
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getActorDetails = async (actorId: number) => {
    try {
        const response = await BASEURL.get(`/person/${actorId}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

