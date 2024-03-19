// controller/SongController.js
import axios from "../setup/axios";
const homeInfo = () => {
    return axios.get(`/api/home`)
}

export {
    homeInfo
}
