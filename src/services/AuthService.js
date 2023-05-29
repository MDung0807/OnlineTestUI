import BaseAPI from "@/services/BaseAPI";

class LoginService {
    async login(data){
        try{
            responseEntity =  await BaseAPI.sendRequest(loginAPI, data)
            if (!responseEntity.error){
                localStorage.setItem('userId', responseEntity.data.id)
                localStorage.setItem('token', responseEntity.data.token)
                message = null
            }
            else {
                message = responseEntity.data.message
            }
        }
        catch(e) {
            message = 'err'
            console.log(e)
        }

        return message
    }
    async register(data){
        responseEntity = await BaseAPI.sendRequest(registerAPI, data)
            return responseEntity.data
    }
    async resetPassword(data){
        return await  BaseAPI.sendRequest(resetPasswordAPI, data);
    }
}
const loginAPI = 'auth/login'
const registerAPI = 'auth/register'
const resetPasswordAPI = 'auth/reset'
let responseEntity
let message=''
export default new LoginService;