
// controller/SongController.js
import axios from "../setup/axios";
const adminSsong = (data) => {
    return axios.post(`/api/admin/searchsong`,
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
    adminSsong
}
