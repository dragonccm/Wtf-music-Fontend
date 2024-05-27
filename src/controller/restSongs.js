import axios from "../setup/axios";
import FormData from "form-data";

const restsongs = (data) => {
  const formData = new FormData();
  formData.append("id", data.data.id);
  formData.append("songname", data.data.songname);
  formData.append("artists", data.data.artists);
  formData.append("genresid", data.data.genresid);
  formData.append("status", data.status);

  formData.append("songLink", data.data.songLink);
  formData.append("file", data.data.thumbnail);

  return axios.post(`/api/admin/restsong`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export { restsongs };