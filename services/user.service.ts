import { rest } from "@/lib/rest";
import { User } from "@/types/user";

export class UserService {
    static getViewer = async () => {
        const res = await rest.get("/users/me");

        return res.data?.data as User;
    };
}
