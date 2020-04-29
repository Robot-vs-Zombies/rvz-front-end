import axios from "axios";

const token = localStorage.getItem("token");

const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://lambda-mud-test.herokuapp.com/",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export default axiosWithAuth;
