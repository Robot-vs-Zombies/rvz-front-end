import axios from "axios";

const token = localStorage.getItem("token");

const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://agile-stream-99199.herokuapp.com/api/adv",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export default axiosWithAuth;
