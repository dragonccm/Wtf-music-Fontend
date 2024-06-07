// controller/SongController.js
import axios from "../setup/axios";
const getRating = () => {
    return axios.get(`/api/rating`)
}
const getRankCliend = () => {
    return axios.get(`/api/getRankCliend`)
}

export {
    getRating,getRankCliend
}
