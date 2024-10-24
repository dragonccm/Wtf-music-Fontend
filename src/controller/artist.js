// controller/SongController.js
import axios from "../setup/axios";
const artist = (id) => {
    return axios.get(`/api/artist/${id}`)
}
const artistSong = (id) => {
    return axios.get(`/api/artistSong/${id}`)
}
const artistPlaylist = (id) => {
    return axios.get(`/api/artistPlaylist/${id}`)
}

export {
    artist,artistSong,artistPlaylist
}
