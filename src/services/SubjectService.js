import BaseAPI from "@/services/BaseAPI";

export const getSubject = async (id) =>{
    let response = BaseAPI.getData(subjectById, 'subjectId', id)
    return response
}

export const getAllSubject = async () => {
    let response = BaseAPI.getAllData(subject)
    console.log("Kết quả: ", response)
    return response;
}

const subject = "subject";
const subjectById = subject + "/id"
