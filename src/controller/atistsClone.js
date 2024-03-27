import axios from "../setup/axios";

const cloneArtistsData = async(data) => {
     await axios.post(`/api/clonepArtists`, {
        data:data
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    cloneArtistsData
}