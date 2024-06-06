import axios from "../setup/axios";
const getban = () => {
    return axios.get(`/api/admin/getbanData`);
};

export { getban };
