import BaseAPI from "@/services/BaseAPI";

export const getSubject = async (id) =>{
    let response = BaseAPI.getData(subject, 'subjectId', id)
    console.log("KẾt quẩ trả về: ", response)
    return response
}

export const getAllSubject = async () => {
    let response = BaseAPI.getAllData(subject)
    console.log("Kết quả: ", response)
    return response;
}

const subject = "subject";
