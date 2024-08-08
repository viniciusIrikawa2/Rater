import axios from "axios";

export const BASEURL = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})