import axios from 'axios';

const URL = 'http://localhost:8000/performance/api/';

const api = axios.create({
    baseURL: URL
});

export default api;
