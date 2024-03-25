// controller/SongController.js
import axios from "../setup/axios";
const artist = () => {
    return axios.get(`/api/artist`)
}

export {
    artist
}
