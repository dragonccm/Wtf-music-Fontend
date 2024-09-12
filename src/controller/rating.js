// controller/SongController.js
import axios from "../setup/axios";
const getRating = () => {
    return axios.get(`/api/rating`)
}

const addRanking = async(id) => {
    return await axios.post(`/api/addRanking`,{id})
}

export {
    getRating,addRanking
}
