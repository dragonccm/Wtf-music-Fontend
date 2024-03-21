// controller/SongController.js
import axios from "../setup/axios";
const getRating = () => {
    return axios.get(`/api/rating`)
}

export {
    getRating
}
