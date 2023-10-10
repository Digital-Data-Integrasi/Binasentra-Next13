import { userLogin } from "@/model/userLogin";
import { auth } from "@/utils/auth";

export const getLogin = async (f:any) => {
    return await auth.post('/user/login', f,{
        headers: {
            "Content-Type": "application/json"
        }
    })
}