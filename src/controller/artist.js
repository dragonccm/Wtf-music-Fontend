// controller/SongController.js
import axios from "../setup/axios";
const artist = (id) => {
    return axios.get(`/api/artist/${id}`)
}

export {
    artist
}
