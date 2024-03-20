// controller/SongController.js
import axios from "../setup/axios";
const top100route = () => {
    return axios.get(`/api/get100`)
}

export {
    top100route
}
