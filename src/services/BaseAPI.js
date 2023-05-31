import axios from "axios";
// import instance from "./AxiosInterceptors"
class BaseAPI {
    async sendRequest(url, objectData){
        return await axios.post(API + url, objectData, {
            headers: {
                Authorization: "Bearer "+ localStorage.getItem('token')
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
        console.log("Token: ",localStorage.getItem('token'))
         return await axios.get(API+url,  {
             // headers: {
             //     Authorization: "Bearer "+ localStorage.getItem('token')
             // },
             params: {
                 subjectId: 2
             },
             timeout: 5000

         })
             .then(response => {
                 return response.data
             })
             .catch(reason =>{
                 return reason.response.data
             })
    }
}


const API='http://localhost:8090/'

export default new BaseAPI