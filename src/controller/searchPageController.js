// controller/SongController.js
import axios from "../setup/axios";
const searchPageController = (data) => {
    return axios.get(`/api/searchpage/${data}`)
}

export {
    searchPageController
}
