import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpClient;
