import axios from 'axios';
import {BASE_URL} from './api.data';

const userAxiosIntance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default userAxiosIntance;
