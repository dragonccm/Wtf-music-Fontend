// controller/SongController.js
import axios from "../setup/axios";
const songInfo = (data) => {
    return axios.get(`/api/songdetail`)
}
const songUrl = (data) => {
    return axios.get(`/api/songurl`)
}
const songLyric = (data) => {
    return axios.get(`/api/songly`)
}
export {
    songInfo,songUrl,songLyric
}
