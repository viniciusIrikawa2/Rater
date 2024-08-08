import axios from "axios";

export const BASEURL = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

BASEURL.interceptors.request.use(config => {
    if (import.meta.env.VITE_TOKEN) {
        config.headers.Authorization = `Bearer ${import.meta.env.VITE_TOKEN}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});