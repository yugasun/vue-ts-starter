import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const service = axios.create();

// Request interceptors
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        // do something
        return config;
    },
    (error: any) => {
        Promise.reject(error);
    },
);

// Response interceptors
service.interceptors.response.use(
    async (response: AxiosResponse) => {
        // do something
        return response.data;
    },
    (error: any) => {
        // do something
        return Promise.reject(error);
    },
);

export default service;
