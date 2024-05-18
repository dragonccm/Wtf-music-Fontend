// controller/SongController.js
import axios from "../setup/axios";
const adminArtist = (id) => {
    return axios.get(`/api/admin/artist/${id}`)
}

export {
    adminArtist
}
