// controller/SongController.js
// controller/SongController.js
import axios from "../setup/axios";
const adminPlaylist = (id) => {
    return axios.get(`/api/admin/playlist/${id}`)
}

export {
    adminPlaylist
}
