import axios from "../setup/axios";
const getUserAccount = () => {
    return axios.get(`/api/account`) 
}

export {
    getUserAccount
}