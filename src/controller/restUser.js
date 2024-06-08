import axios from "../setup/axios";

const restUser = (data) => {
  return axios.post(`/api/admin/restuser`,
    {
      data: data,
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    });
};

export { restUser };