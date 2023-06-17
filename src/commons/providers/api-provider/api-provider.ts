import axios from 'axios';


export const crackTheCodeApi = axios.create({
    baseURL: '/api',
    headers: {}
});

