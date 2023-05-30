import BaseAPI from "@/services/BaseAPI";
import {NOT_CONNECT} from "@/utils/Contrain";

class LoginService {
    async login(data){
        try{
            responseEntity =  await BaseAPI.sendRequest(loginAPI, data)
            if (!responseEntity.error){
                localStorage.setItem('userId', responseEntity.data.id)
                localStorage.setItem('token', responseEntity.data.token)
                message = responseEntity
            }
            else {
                message = responseEntity
            }
        }
        catch(e) {
            message ={
                error:true,
                data:{
                    message: NOT_CONNECT
                }
            }
        }

        return message
    }
    async register(data){
        const formData = new FormData();
        formData.append("username", data.username)
        formData.append('password', data.password)
        formData.append("firstName", data.firstName)
        formData.append("lastName", data.lastName)
        formData.append("email", data.email)
        formData.append("phoneNumber", data.phoneNumber)
        formData.append("gender", data.gender)
        formData.append("avatar", data.avatar)

        try {
            responseEntity = await BaseAPI.sendRequest(registerAPI, formData)
            message = responseEntity.data
        }
        catch (e){
            console.log(e)
        }
        return message
    }
    async resetPassword(data){
        return await  BaseAPI.sendRequest(resetPasswordAPI, data);
    }
}
const loginAPI = 'auth/login'
const registerAPI = 'auth/register'
const resetPasswordAPI = 'auth/reset'
let responseEntity
let message ={
    error :Boolean,
    data : Object
}
export default new LoginService;