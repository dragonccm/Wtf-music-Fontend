// controller/SongController.js
import axios from "../setup/axios";

const registerUser = (email, password, username) => {
  return axios.post("/api/register", {
    email,
    password,
    username,
  });
};

const loginUser = (valueLogin, password,checkRemember) => {
  return axios.post("/api/login", {
    valueLogin,
    password,
    checkRemember
  });
};

const logoutUser = () => {
  return axios.post("/api/logout");
};

export { registerUser, loginUser,logoutUser };