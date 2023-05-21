import axios from "axios";
import BaseAPI from "@/services/BaseAPI";

class LoginService {
    login(){
        axios.post(BaseAPI.API)
    }
}

export default LoginService;