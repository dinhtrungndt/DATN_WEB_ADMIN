import axios from 'axios';

const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        // baseURL: 'https://datnapi.vercel.app'
        // baseURL: 'https://datanpi-8145a0ba6e06.herokuapp.com'
        // baseURL: 'http://192.168.1.39:8080/'
        baseURL: 'https://dataapi-g3cn.onrender.com'
    });

    axiosInstance.interceptors.request.use(
        async (config) => {
            config.headers = {
                'Authorization': `Bearer ${''}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;