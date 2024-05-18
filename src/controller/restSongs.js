// controller/SongController.js
import axios from "../setup/axios";
const restsongs = (data) => {
    return axios.post(`/api/admin/restsong`,
        {
            data: data,
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
}
export {
    restsongs
}
