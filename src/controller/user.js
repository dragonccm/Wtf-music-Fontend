import axios from "../setup/axios";
const getUserAccount = () => {
    return axios.get(`/api/account`) 
}
const UserInfo = () => {
    return axios.get(`/api/getInfor`)
}
const EditUserInfo = (infor) => {
    return axios.post(`/api/editInfor`, {
        infor
      })
}
export {
    getUserAccount,
    UserInfo,
    EditUserInfo
}