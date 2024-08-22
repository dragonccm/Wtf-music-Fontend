// controller/SongController.js
import axios from "../setup/axios";
const changePass = (password,newPassword) => {
    return axios.post(`/api/changepass`,{password,newPassword});
}
const resetPass = (newPassword,cfPassword) => {
    return axios.post(`/api/reset-pass`,{newPassword,cfPassword});
}

export {
    changePass,resetPass
}
