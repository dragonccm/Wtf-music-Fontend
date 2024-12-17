// controller/SongController.js
import axios from "../setup/axios";
const adSongToPlaylist = async (data) => {
    return axios.post(`/api/addtoplaylist`, {
        data:data
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
const createplaylist = async (data) => {
    return axios.post(`/api/createplaylist`, {
        data:data
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
const deleteplaylist = async (data) => {
    return axios.post(`/api/delemyplaylist`, {
        data:data
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
const userPLayList = async () => {
    return await axios.get(`/api/getuserplaylist`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
}
const getBlockList = async () => {
    return await axios.get(`/api/getBlocked`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
}
const reomoveBlockList = async (id) => {
    return await axios.post(`/api/removeBlocked`,{id:id}, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
export {
    adSongToPlaylist,createplaylist,deleteplaylist,userPLayList,getBlockList,reomoveBlockList
}
