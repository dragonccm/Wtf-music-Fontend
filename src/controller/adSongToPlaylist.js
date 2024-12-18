// controller/SongController.js
import axios from "../setup/axios";
const adSongToPlaylist = async (data) => {
    return axios.post(`/api/addtoplaylist`, {
        data:data
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export {
    adSongToPlaylist
}
