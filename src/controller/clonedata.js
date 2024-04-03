import axios from "../setup/axios";

const cloneData = async (data) => {
    console.log('hahahahah=====================================================')
     await axios.post(`/api/clone`, {
        data:data
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    cloneData
}