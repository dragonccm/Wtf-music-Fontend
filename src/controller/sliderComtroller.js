import axios from "../setup/axios";

const getSlideController = () => {
    return axios.get(`/api/admin/getslide`);
};

const setSildeController = (id, data) => {
    return axios.post(`/api/admin/setslide/${id}`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

const insertSildeController = (data) => {
    return axios.post(`/api/admin/insertslide`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export {
    getSlideController,
    setSildeController,
    insertSildeController
};