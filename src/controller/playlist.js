// controller/SongController.js
import axios from "../setup/axios";
const playlistroute = (id) => {
    return axios.get(`/api/getplaylist/${id}`)
}

export {
    playlistroute
}
