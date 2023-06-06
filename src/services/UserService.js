import BaseAPI from "./BaseAPI"

export const getProfile = async ()=>{
    let response = await BaseAPI.getAllData(profile);
    return response
}

const profile = 'profile'