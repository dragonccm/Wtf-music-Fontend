import axios from "../setup/axios";

const cloneSongs = async(data) => {
     await axios.post(`/api/clone`, {
        data:data
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    cloneSongs
}