import BaseAPI from "@/services/BaseAPI";

class TopicService{
    async getAllTopicBySubjectId(data){
        try {
            const response = await BaseAPI.getData(url,'subjectId', data)
            if (!response.error){
                return response.data
            }
            return null
        }
        catch (e){
            console.log(e)
            return null
        }
    }
}
const url='topic'
export default new TopicService