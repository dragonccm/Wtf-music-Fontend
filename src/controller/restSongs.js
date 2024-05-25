// controller/SongController.js
import axios from "../setup/axios";
const restsongs = (data) => {
    const formData = new FormData();

    formData.append('id', data.id);
    formData.append('songname', data.songname);
    formData.append('artists', data.artists);
    formData.append('genresid', data.genresid);
    formData.append('songLink', data.songLink);
    formData.append('like', data.like);
    formData.append('listen', data.listen);

    formData.append("file", data.thumbnail);
    return axios.post(`/api/admin/restsong`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}
export {
    restsongs
}
