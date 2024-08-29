// controller/SongController.js
import axios from "../setup/axios";
const restComment = async (data,userId) => {
    return axios.post(`/api/restcomment`, {
        data,
        userId
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
const getComment = async (id) => {
    return axios.get(`/api/getComment/${id}`);
}
const editComment = async (data) => {
    return axios.post(`/api/editComment`, {
        data
    });
}
const createComments = async (data) => {
    return axios.post(`/api/createComment`, {
        data
    });
}
export {
    restComment,getComment,editComment,createComments
}
