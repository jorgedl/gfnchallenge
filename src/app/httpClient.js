import axios from 'axios';

let URL = '/performance/api/';

if (process.env.API_URL !== undefined) {
    URL = process.env.API_URL;
}

const api = axios.create({
    baseURL: URL
});

export default api;
