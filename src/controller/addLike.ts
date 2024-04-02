// controller/SongController.js
import axios from "../setup/axios";
const addLikes = async (data) => {
    await axios.post(`/api/addLikes`, {
        data:data
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export {
    addLikes
}
