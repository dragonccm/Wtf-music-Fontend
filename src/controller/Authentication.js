// controller/SongController.js
import axios from "../setup/axios";

const registerUser = (email, password, username) => {
  return axios.post("/api/register", {
    email,
    password,
    username,
  });
};

const loginUser = (valueLogin, password) => {
  return axios.post("/api/login", {
    valueLogin,
    password,
  });
};

export { registerUser, loginUser };
