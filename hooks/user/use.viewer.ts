import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { userQueryKeys } from "./user.keys";
import { UserService } from "@/services/user.service";

export const useViewer = () => {
    return useQuery({
        queryKey: userQueryKeys.viewer,
        queryFn: UserService.getViewer,
    });
};


export const useUpdateUserPersonalInfo = ()=>{
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: UserService.updateUserPersonalInfo,
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: userQueryKeys.viewer});
        }
    })
}
