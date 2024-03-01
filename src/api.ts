import axios from 'axios';
import { API_BASE_URL } from './constants';

const client = axios.create({
  baseURL: API_BASE_URL,
});

// Return response.data
client.interceptors.response.use(({ data }) => data);

export default client;
