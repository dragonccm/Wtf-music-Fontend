// controller/SongController.js
import axios from "../setup/axios";
const playlistroute = (id) => {
    return axios.get(`/api/getplaylist/${id}`)
}
const playlistRelate = (id) => {
    return axios.get(`/api/getRelatedPlaylist/${id}`)
}

export {
    playlistroute,playlistRelate
}
