import axios from "../setup/axios";
const getId = () => {
    return axios.get(`/api/getallsong`)
}
const postSong = (id) => {
    return axios.post(`/api/postsong`, {id})
}
export {
    getId,
    postSong
}