// controller/SongController.js
import axios from "../setup/axios";
const adminGetComment = (id) => {
    return axios.get(`/api/admin/comment/${id}`)
}

export {
    adminGetComment
}
