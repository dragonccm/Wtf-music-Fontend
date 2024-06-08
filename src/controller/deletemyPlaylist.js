// controller/SongController.js
import axios from "../setup/axios";
const deleteplaylist = async (data) => {
    return axios.post(`/api/delemyplaylist`, {
        data:data
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export {
    deleteplaylist
}
