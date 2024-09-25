// controller/SongController.js
import axios from "../setup/axios";
const getrankingController = (id,range,startday) => {
    return axios.get(`/api/getrankingservice/${id}/${range}/${startday}`)
}
const getrankinglistenController = (id,range,startday) => {
    return axios.get(`/api/getrankingservicelisten/${id}/${range}/${startday}`)
}

export {
    getrankingController,
    getrankinglistenController
}
