// controller/SongController.js
import axios from "../setup/axios";
const adSongToPlaylist = async (data) => {
    await axios.post(`/api/updatetoplaylist`, {
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
