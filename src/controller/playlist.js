// controller/SongController.js
import axios from "../setup/axios";
const playlistroute = (id) => {
    return axios.get(`/api/getplaylist/${id}`)
}
const playlistRelate = () => {
    return axios.get(`/api/getRelatedPlaylist`)
}

export {
    playlistroute,playlistRelate
}
