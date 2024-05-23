// controller/SongController.js
import axios from "../setup/axios";
const restArtists = (data) => {
    return axios.post(`/api/admin/restartists`,
        {
            data: data.data,
            status: data.status
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
}
export {
    restArtists
}
