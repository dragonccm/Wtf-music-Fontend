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
const loginGG = (id) => {
  return axios.post("/api/login-gg-success",{id});
};
const sendOtp = (email) => {
  return axios.post("/api/forgot-password",{email});
};
const verifyOtp = (otp) => {
  return axios.post("/api/verifyOtp",{otp});
};
const againSendOTP = (otp) => {
  return axios.get("/api/requestOTP");
};

export { registerUser, loginUser,logoutUser,loginGG,sendOtp,verifyOtp,againSendOTP };
