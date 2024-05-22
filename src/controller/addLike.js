// controller/SongController.js
import axios from "../setup/axios";
const addLike =  (data) => {
    console.log(data)
    return axios.post(`/api/addlike`,{data:data});

}
const unLike = (data) => {
   
    return axios.post(`/api/unlike`,{data:data});
}
export {
    addLike,
    unLike
}
