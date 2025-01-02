import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const login = (data) => API.post('/auth/login', data);
export const register = (data) => API.post('/auth/register', data);
export const uploadMarks = (data, config) => API.post('/marks/upload', data, config);
export const getMarks = (studentId) => API.get(`/marks/${studentId}`);