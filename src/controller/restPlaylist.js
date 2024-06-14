import axios from "../setup/axios";
import FormData from "form-data";

const restplaylist = (data) => {
  console.log(data.data)
  const formData = new FormData();
  formData.append("playlistId", data.data.playlistId);
  formData.append("playlistname", data.data.playlistname);
  formData.append("genresid", data.data.genresid);
  formData.append("artistsId", data.data.artistsId);
  formData.append("file", data.data.thumbnail);
  formData.append("type", data.data.type);
  formData.append("description", data.data.description);
  formData.append("songid", data.data.songid);
  formData.append("status", data.status);
  return axios.post(`/api/admin/restplaylist`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export { restplaylist };
