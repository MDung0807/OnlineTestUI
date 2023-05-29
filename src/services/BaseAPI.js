import axios from "axios";
// import router from "@/router";

class BaseAPI {
    async sendRequest(url, objectData){
        return await axios.post(API + url, objectData)
            .then(response => {
                return response.data
            })
            .catch((response)=>{
                return response.response.data
                // router.push('/test')
            })
    }
}


const API='http://localhost:8090/'

export default new BaseAPI