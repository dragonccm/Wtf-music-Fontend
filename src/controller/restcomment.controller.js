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
export {
    restComment
}
