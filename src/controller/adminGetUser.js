// controller/SongController.js
import axios from "../setup/axios";
const adminGetUser = (id) => {
    return axios.get(`/api/admin/user/${id}`)
}

export {
    adminGetUser
}
