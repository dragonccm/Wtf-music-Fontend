// controller/SongController.js
import axios from "../setup/axios";
const restgenres = (data) => {
    return axios.post(`/api/admin/restgenre`,
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
    restgenres
}
