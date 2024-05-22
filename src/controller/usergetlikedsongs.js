import axios from "../setup/axios";

const usergetlikedsong = async () => {
  return await axios.post(`/api/getuserlikesong`, {
    data: "id"
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export {
  usergetlikedsong
}