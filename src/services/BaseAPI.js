import instance from "./AxiosInterceptors"
class BaseAPI {
    // Send post request
    async createData(url, objectData){
        const response = await instance().post(url, objectData)
        try {
            return response
        }
        catch {
            console.log("Trả về lỗi nè: ", response)
            return response
        }
    }

    //Send get Request
    async getData (url, paramName, paramValue){
        const response = await instance().get(url, {
            params:{
                [paramName] : paramValue
            }
        })
        try {
            console.log( "Response nè: ", response)
        }
        catch {
            console.log("Lỗi trả về nè: ", response)
            return response
        }
    }

    async getAllData (url){
        const response = await instance().get(url)
        try {
            console.log(response)
            return response
        }
        catch {
            console.log("Lỗi trả về nè: ", response)
            return response
        }
    }

}
export default new BaseAPI