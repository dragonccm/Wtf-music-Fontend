// controller/SongController.js
import axios from "../setup/axios";
const createplaylist = async (data) => {
    return axios.post(`/api/createplaylist`, {
        data:data
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export {
    createplaylist
}
