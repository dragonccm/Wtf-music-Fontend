// controller/SongController.js
import axios from "../setup/axios";
const songPage = (data) => {
    return axios.get(`/api/songPage/${data}`)
}

export {
    songPage
}
