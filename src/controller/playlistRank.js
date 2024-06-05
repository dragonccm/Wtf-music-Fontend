// controller/SongController.js
import axios from "../setup/axios";
const getrankingPlController = (id) => {
    return axios.get(`/api/getrankingplservice/${id}`)
}

export {
    getrankingPlController
}
