// controller/SongController.js
import axios from "../setup/axios";
const restComment = async (data) => {
    console.log(data)
    return axios.post(`/api/restcomment`, {
        data
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export {
    restComment
}
