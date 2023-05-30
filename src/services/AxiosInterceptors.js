import axios from "axios";
const instance = ()=>{
    const instance = axios.create({
        baseURL: process.env.VUE_API_URL
    })

    instance.interceptors.request.use(request)
    instance.interceptors.response.use(responseSuccess, responseFault)
    return instance
}

const request = (config) =>{
    config.headers={
        Authorization: 'Bearer '+ localStorage.getItem('token')
    }
    return config
}

const responseSuccess = (response)=>{
    return response.data
}

const responseFault = (response)=>{
    return response.response.data
}
export default instance