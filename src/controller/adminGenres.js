// controller/SongController.js
import axios from "../setup/axios";
const adminGetGenre = (id) => {
    return axios.get(`/api/admin/genres/${id}`)
}

export {
    adminGetGenre
}
