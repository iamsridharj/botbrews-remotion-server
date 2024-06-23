import axios, { AxiosInstance } from 'axios';

const baseURL = process.env.BACKEND_URL || "http://localhost:8000";

const axiosWrapper: AxiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});


export { axiosWrapper };