import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.16.255.104:3030',
});

export default api;