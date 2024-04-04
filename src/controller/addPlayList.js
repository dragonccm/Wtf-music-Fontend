// controller/SongController.js
import axios from "../setup/axios";
const addPlayList = async (data) => {
    await axios.post(`/api/addnewplaylist`, {
        data:data
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export {
    addPlayList
}
