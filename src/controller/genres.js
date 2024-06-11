import axios from "../setup/axios";
const genres = () => {
    return axios.get(`/api/getgenres`);
};
const getGenresbyId = (id) => {
    return axios.get(`/api/getGenresbyId/${id}`);
}

export { genres,getGenresbyId };
