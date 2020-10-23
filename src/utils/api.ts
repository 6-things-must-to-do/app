import Axios from 'axios';
import {BASE} from '@/constants/endpoints';

export const api = (token?: string) =>
  Axios.create({baseURL: BASE, headers: {Authorization: `Bearer ${token}`}});
