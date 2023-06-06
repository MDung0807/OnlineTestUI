import BaseAPI from "@/services/BaseAPI";

export const getSubject = async (id) =>{
    let response = await BaseAPI.getData(subjectById, 'subjectId', id)
    return response
}

export const getAllSubject = async () => {
    let response = await BaseAPI.getAllData(subject)
    console.log("Kết quả: ", response)
    return response;
}

export const createSubject = async (data) => {
    let response = await BaseAPI.createData(addSubject, data)
    return response;
}
const subject = "subject";
const subjectById = subject + "/id"
const addSubject = subject+'/add'
