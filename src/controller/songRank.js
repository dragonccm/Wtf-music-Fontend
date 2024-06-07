// controller/SongController.js
import axios from "../setup/axios";
const getrankingController = (id) => {
    return axios.get(`/api/getrankingservice/${id}`)
}
const getrankinglistenController = (id) => {
    return axios.get(`/api/getrankingservicelisten/${id}`)
}

export {
    getrankingController,
    getrankinglistenController
}
