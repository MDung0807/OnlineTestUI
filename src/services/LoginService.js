import axios from "axios";
import BaseAPI from "@/services/BaseAPI";

class LoginService {
    login(){
        console.log("dang login")
        console.log(BaseAPI.API+loginAPI)
        console.log(dataLogin)
        axios.post(BaseAPI.API+ loginAPI, dataLogin)
            .then(response => {console.log(response.data)})
            .catch(err => {
                console.log(err)
            })
    }
}
const loginAPI = 'auth/login'
const dataLogin={
    username:'tanntn29',
    password: 'Tan1234@'
}
export default LoginService;