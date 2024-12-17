import axios from "../setup/axios";

const userPLayList = async (data) => {
  return await axios.post(`/api/getuserplaylist`, {
    data: data
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export {
  userPLayList
}