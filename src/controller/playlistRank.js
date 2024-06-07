// controller/SongController.js
import axios from "../setup/axios";
const getrankingPlController = (id) => {
    return axios.get(`/api/getrankingplservice/${id}`)
}
const getrankingPllistenController = (id) => {
    return axios.get(`/api/getrankingplservicelisten/${id}`)
}

export {
    getrankingPlController,
    getrankingPllistenController
}
