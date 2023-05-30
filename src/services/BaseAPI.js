import axios from "axios";
// import instance from "./AxiosInterceptors"
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

    // async createData(url, objectData){
    //     const response = await instance().postForm(url, objectData)
    //     console.log(response)
    //     try {
    //         return response.data
    //     }
    //     catch {
    //         console.log(response)
    //     }
    // }

    async getData(url, params){
        console.log(params)
         return await axios.get(API+url,  {
             params: {
                 subjectId:2
             },
             headers:{
                 'Authorization': "Bearer "+ localStorage.getItem('token'),
             }
         })
             .then(response => {
                 console.log(response)
                 return response.data
             })
             .catch(reason =>{
                 console.log('ex', reason)
                 return reason.response.data
             })
    }
}


const API='http://localhost:8090/'

export default new BaseAPI