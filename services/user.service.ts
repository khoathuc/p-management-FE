import { personalInformationSchema } from "@/app/settings/account/validations/account.setting";
import { rest } from "@/lib/rest";
import { User } from "@/types/user";
import { z } from "zod";

type PersonalInformationFormData = z.infer<typeof personalInformationSchema>;

export class UserService {
    static getViewer = async () => {
        const res = await rest.get("/users/me");

        return res.data?.data as User;
    };


    static updateUserPersonalInfo = async (data: PersonalInformationFormData) => {
        const res = await rest.put("/users/info", data);

        return res.data?.data as User;
    }
}
