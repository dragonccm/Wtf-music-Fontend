// controller/SongController.js
import axios from "../setup/axios";
const songInfo = (data) => {
    return axios.get(`/api/songdetail/${data}`)
}
const songUrl = (data) => {
    return axios.get(`/api/songurl/${data}`)
}
const songLyric = (data) => {
    return axios.get(`/api/songly/${data}`)
}
export {
    songInfo,songUrl,songLyric
}
