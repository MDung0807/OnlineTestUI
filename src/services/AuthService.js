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
let message=''
export default new LoginService;