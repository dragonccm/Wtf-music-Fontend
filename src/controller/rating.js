// controller/SongController.js
import axios from "../setup/axios";
const getRating = () => {
    return axios.get(`/api/rating`)
}
const getRankCliend = () => {
    return axios.get(`/api/getRankCliend`)
}
const addRanking = async(id) => {
    return await axios.post(`/api/addRanking`,{id})
}

export {
    getRating,getRankCliend,addRanking
}
