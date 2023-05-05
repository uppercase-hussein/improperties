import axios from "axios";

// set up axios instance
const axiosInstance = axios.create({
    baseURL: 'https://heartfelt-crumble-dbcec1.netlify.app/api',
    // timeout: 5000,
    // headers: {
    //     'Content-Type': 'application/json',
    // },
});


export default axiosInstance;