// controller/SongController.js
// controller/SongController.js
import axios from "../setup/axios";
const adminSinger = (id) => {
    return axios.get(`/api/admin/artist/${id}`)
}

export {
    adminSinger
}
