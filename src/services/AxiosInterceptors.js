import axios from "axios";
const instance = ()=>{
    const instance = axios.create({
        baseURL: "http://localhost:8090/"
    })
    instance.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token')
    instance.defaults.timeout = 100000
    // instance.interceptors.request.use(request)
    instance.interceptors.response.use(responseSuccess, responseFault)
    return instance
}

// const request = (config) =>{
//     config.headers={
//         Authorization: 'Bearer '+ localStorage.getItem('token')
//     }
//     return config
// }

const responseSuccess = (response)=>{
    console.log("Đây là response chính: ", response)
    return response.data
}

const responseFault = (response)=>{
    console.log("Lỗi: ", response)
    return response.response.data
}
export default instance