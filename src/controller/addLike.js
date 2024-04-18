// controller/SongController.js
import axios from "../setup/axios";
const addLike = async (data) => {
    await axios.post(`/api/addlike`, {
        data:data
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export {
    addLike
}
