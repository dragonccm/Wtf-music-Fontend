import axios from "../setup/axios";
const getUserAccount = () => {
    return axios.get(`/api/account`) 
}
const UserInfo = () => {
    return axios.get(`/api/getInfor`)
}
const EditUserInfo = (infor) => {
    const formData = new FormData();
    formData.append('email', infor.email);
    formData.append('birthday', infor.birthday);
    formData.append('file', infor.file);
    
    return axios.post(`/api/editInfor`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
export {
    getUserAccount,
    UserInfo,
    EditUserInfo
}