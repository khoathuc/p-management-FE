import axios from "axios";

export const httpProvider = axios.create({
    baseURL: process.env.BACKEND_INTERNAL_URL,
    timeout: 60000,
});