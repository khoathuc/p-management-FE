import { QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
            refetchOnWindowFocus: false,
        },
    },
});

export default queryClient;
