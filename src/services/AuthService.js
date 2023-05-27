import axios from "axios";
import BaseAPI from "@/services/BaseAPI";

class LoginService {
    login(data){
        console.log(BaseAPI.API+loginAPI)
        console.log(data)
        axios.post(BaseAPI.API+ loginAPI, data)
            .then(response => {console.log(response.data)})
            .catch(response => {
                console.log(response.data)
            })
    }
    register(data){
        console.log(BaseAPI.API+registerAPI)
        axios.post(BaseAPI.API+registerAPI, data)
        .then(response => {console.log(response.data)})
        .catch(err => {console.log(err)})
    }

    resetPassword(data){
        console.log(BaseAPI.API+resetPasswordAPI)
        axios.post(BaseAPI.API+resetPasswordAPI, data)
        .then(response => {console.log(response.data)})
        .catch(err => {console.log(err)})
    }
}
const loginAPI = 'auth/login'
const registerAPI = 'auth/register'
const resetPasswordAPI = 'auth/reset'
export default new LoginService;