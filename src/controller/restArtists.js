// controller/SongController.js
import axios from "../setup/axios";
const restArtists = (data) => {
    const formData = new FormData();
    formData.append("file", data.data.avt);
    formData.append("artistsName", data.data.artistsName);
    formData.append("realName", data.data.realName);
    formData.append("biography", data.data.biography);
    formData.append("birthday", data.data.birthday);
    formData.append("songListId", data.data.songListId);
    formData.append("playListId", data.data.playListId);
    formData.append("status", data.status);
    console.log(formData);
    return axios.post(`/api/admin/restartists`,formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    };
export {
    restArtists
}
