import { useQuery } from "@tanstack/react-query";
import { userQueryKeys } from "./user.keys";
import { UserService } from "@/services/user.service";

export const useViewer = () => {
    return useQuery({
        queryKey: userQueryKeys.viewer,
        queryFn: UserService.getViewer,
    });
};