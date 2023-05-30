import axios from "axios";
import instance from "./AxiosInterceptors"
class BaseAPI {
    async sendRequest(url, objectData){
        return await axios.post(API + url, objectData, {
            headers: {
                'Authorization': "Bearer "+ localStorage.getItem('token')
            }
        })
            .then(response => {
                return response.data
            })
            .catch((response)=>{
                return response.response.data
                // router.push('/test')
            })
    }

    async createData(url, objectData){
        const response = await instance().postForm(url, objectData)
        console.log(response)
        try {
            return response.data
        }
        catch {
            console.log(response)
        }
    }
}


const API='http://localhost:8090/'

export default new BaseAPI