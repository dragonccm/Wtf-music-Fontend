// controller/SongController.js
import axios from "../setup/axios";
const getrankingController = (id,range,startday) => {
    return axios.get(`/api/getrankingservice/${id}/${range}/${startday}`)
}
const getrankinglistenController = (id,range,startday) => {
    return axios.get(`/api/getrankingservicelisten/${id}/${range}/${startday}`)
}
const getrankingplserviceController = (data) => {
    return axios.post(`/api/getrankingplservice`,data);
};

const getrankingplservicelistenController = (data) => {
    return axios.post(`/api/getrankingplservicelisten`,data);
};

export {
    getrankingController,
    getrankinglistenController,
    getrankingplserviceController,
    getrankingplservicelistenController
}
