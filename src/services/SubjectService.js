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
    const formData = new FormData();
    formData.append('name', data.name)
    formData.append('image', data.image)
    let response = await BaseAPI.createData(addSubject, formData)
    return response;
}
const subject = "subject";
const subjectById = subject + "/id"
const addSubject = subject+'/add'
