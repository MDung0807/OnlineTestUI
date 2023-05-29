import axios from "axios";

class BaseAPI {
    async sendRequest(url, objectData){
        return await axios.post(API + url, objectData)
            .then(response => {
                return response.data
            })
            .catch(response => console.log(response))
    }
}


const API='http://localhost:8090/'

export default new BaseAPI