import axios from "../setup/axios";
const getUserAccount = () => {
    return axios.get(`/api/account`) 
}
const UserInfo = () => {
    return axios.get(`/api/getInfor`)
}
export {
    getUserAccount,
    UserInfo
}