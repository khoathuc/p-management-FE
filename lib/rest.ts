import axios from "axios";
import { getSession } from "next-auth/react";

const isServer = typeof window === "undefined";

export const rest = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 60000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

rest.interceptors.request.use(async (config) => {
    if (isServer) {
        const session = await getSession();

        if (session) {
            config.headers["Authorization"] = `Bearer ${session.accessToken}`;
        }
    }

    return config;
});