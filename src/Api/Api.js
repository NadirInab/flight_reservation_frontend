import axios from "axios" ;
const api = axios.create({
    baseURL : "http://127.0.0.1:8000/api/"
}) ;

api.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = `Bearer ${token}`;
    return config ;
});

export default api ;