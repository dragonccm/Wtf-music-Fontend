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
const getComment = async (id,page) => {
    return axios.get(`/api/getComment/${id}/${page}`);
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
const deleteComments = async (id) => {
    return axios.post(`/api/deleteComment`,{id});
}
const reportComments = async (id) => {
    return axios.post(`/api/reportComment`,{id});
}
export {
    restComment,getComment,editComment,createComments,deleteComments,reportComments
}
