// controller/SongController.js
import axios from "../setup/axios";
const adminSong = (id) => {
    return axios.get(`/api/admin/song/${id}`)
}
const adminGetSongRankThisMonth = () => {
    return axios.get(`/api/admin/songRankThisMonth`)
}

export {
    adminSong,
    adminGetSongRankThisMonth
}
