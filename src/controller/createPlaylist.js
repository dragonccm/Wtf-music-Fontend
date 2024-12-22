// controller/SongController.js
import axios from "../setup/axios";
const createplaylist = async (data) => {
    await axios.post(`/api/createplaylist`, {
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
