import axios from "../setup/axios";
const genres = () => {
    return axios.get(`/api/getgenres`);
};

export { genres };
