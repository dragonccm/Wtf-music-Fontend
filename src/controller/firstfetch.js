// controller/SongController.js
import axios from "../setup/axios";
const songInfo = (data) => {
    return axios.get(`/api/songdetail/${data}`)
}

const search = (data) => {
    return axios.get(`/api/search/${data}`)
}
export {
    songInfo,search
}
