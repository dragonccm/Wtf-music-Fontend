// controller/SongController.js
import axios from "../setup/axios";
const changePass = (password,newPassword) => {
    return axios.post(`/api/changepass`,{password,newPassword});
}

export {
    changePass
}
