import axios from "axios";
import BaseAPI from "@/services/BaseAPI";

class LoginService {
    login(data){
        console.log("dang login")
        console.log(BaseAPI.API+loginAPI)
        console.log(data)
        axios.post(BaseAPI.API+ loginAPI, data)
            .then(response => {console.log(response.data)})
            .catch(err => {
                console.log(err)
            })
    }
}
const loginAPI = 'auth/login'
export default LoginService;