import axios from "axios";

export const httpProvider = axios.create({
    baseURL: process.env.SERVER_API_URL,
    timeout: 60000,
});