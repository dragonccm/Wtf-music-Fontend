// controller/SongController.js
import axios from "../setup/axios";
const getrankingPlController = (data) => {
    return axios.post(`/api/getrankingplservice`,{
        data:data
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
const getrankingPllistenController = (data) => {
    return axios.post(`/api/getrankingplservicelisten`,{
        data:data
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    getrankingPlController,
    getrankingPllistenController
}
