import axios from "axios";

export const rest = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_INTERNAL_URL,
    timeout: 60000,
    withCredentials: true,
});
