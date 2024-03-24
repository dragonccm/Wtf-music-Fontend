// controller/SongController.js
import axios from "../setup/axios";

const registerUser = (email, password, username) => {
    return axios.post('/api/register', {
            email,password,username
        })
}

export {
    registerUser
}
