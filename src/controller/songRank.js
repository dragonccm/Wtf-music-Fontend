// controller/SongController.js
import axios from "../setup/axios";
const getrankingController = (id) => {
    return axios.get(`/api/getrankingservice/${id}`)
}

export {
    getrankingController
}
