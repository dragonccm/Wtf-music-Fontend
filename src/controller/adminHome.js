// controller/SongController.js
import axios from "../setup/axios";
const adminHome = () => {
    return axios.get(`/api/adminhome`)
}

export {
    adminHome
}
