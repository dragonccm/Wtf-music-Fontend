
// controller/SongController.js
import axios from "../../setup/axios";
const adminSong = (data) => {
    return axios.post(`/api/admin/searchSongs`,
        {
            data: data,
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
}
const searchGenre = (data) => {
    return axios.post(`/api/admin/searchGenre`,
        {
            data: data,
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
}
const searchPlaylist = (data) => {
    return axios.post(`/api/admin/searchPlaylist`,
        {
            data: data,
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
}
const searchUser = (data) => {
    return axios.post(`/api/admin/searchUser`,
        {
            data: data,
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
}
const searchArtists = (data) => {
    return axios.post(`/api/admin/searchArtists`,
        {
            data: data,
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
}
export {
    adminSong,
    searchGenre,
    searchPlaylist,
    searchUser,
    searchArtists,
}
