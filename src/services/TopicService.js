import BaseAPI from "@/services/BaseAPI";

class TopicService{
    async getAllTopicBySubjectId(data){
        const params ={
        subjectId: parseInt(data)
        }
        try {
            const response = await BaseAPI.getData(url, params)
            if (!response.error){
                console.log("response", response.data)
                return response.data
            }
            return null
        }
        catch {
            return null
        }
    }
}
const url='topic'
export default new TopicService