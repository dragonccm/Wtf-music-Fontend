// controller/SongController.js
import axios from "../setup/axios";
const restgenres = (data) => {
    console.log(data);
    const formData = new FormData();
    if(data.data.genreId){
      formData.append("genreId", data.data.genreId);
    }
    formData.append("genrename", data.data.genrename);
    formData.append("thumbnail", data.data.thumbnail);
    formData.append("thumbnailHasText", data.data.thumbnailHasText);
    formData.append("thumbnailR", data.data.thumbnailR);
    formData.append("description", data.data.description);
    formData.append("state", data.data.state);
    formData.append("status", data.status);

    return axios.post(`/api/admin/restgenre`,formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    };
export {
    restgenres
}
