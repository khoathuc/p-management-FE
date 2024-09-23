import axios from "axios";
const NEXT_PUBLIC_BACKEND_INTERNAL_URL = "http://localhost:3001";
export const rest = axios.create({
    baseURL: NEXT_PUBLIC_BACKEND_INTERNAL_URL,
    timeout: 60000,
    withCredentials: true,
});
