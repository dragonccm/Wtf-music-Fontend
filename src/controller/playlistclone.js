import axios from "../setup/axios";

const clonePlayListData = async(data) => {
     await axios.post(`/api/cloneplaylist`, {
        data:data
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    clonePlayListData
}