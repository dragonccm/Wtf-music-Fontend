import axios from "../setup/axios";

const updateH = async(data) => {
     await axios.post(`/api/updatewhistory`, {
        data:data
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const addNewH = async(data) => {
    await axios.post(`/api/addnewhistory`, {
       data:data
   }, {
       headers: {
           'Content-Type': 'application/json'
       }
   });
}
const getHistory = async() => {
    return await axios.get(`/api/getHistory`, {
       headers: {
           'Content-Type': 'application/json'
       }
   });
}

export {
    updateH,
    addNewH,
    getHistory
}