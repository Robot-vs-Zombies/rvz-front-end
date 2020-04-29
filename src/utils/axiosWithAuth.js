import axios from 'axios';

const token = localStorage.getItem('token');

const axiosWithAuth = () => {
    
    return axios.create({
        baseURL: 'https://lambda-mud-test.herokuapp.com/',
        headers: {
            Authorization: token
        }
    });
};

export default axiosWithAuth;