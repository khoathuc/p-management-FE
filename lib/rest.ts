import axios from "axios";

export const rest = axios.create({
    baseURL: process.env.BACKEND_INTERNAL_URL,
    timeout: 60000,
});