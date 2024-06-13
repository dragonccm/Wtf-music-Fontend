// controller/SongController.js
import axios from "../setup/axios";
const bancomment =  (data) => {
    return axios.post(`/api/admin/bancomment`,{id:data});

}

export {
    bancomment,
}
