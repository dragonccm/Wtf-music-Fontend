// controller/SongController.js
import axios from "../setup/axios";
const adminSong = () => {
    return axios.get(`/api/admin/song`)
}

export {
    adminSong
}
