import axios from "../setup/axios";
const deditgetdataCtrl = async (id) => {
    return axios.get(`/api/admin/editpage/${id}`)
}
export {
    deditgetdataCtrl
}
