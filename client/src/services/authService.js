import axios from 'axios';

const API = 'http://localhost:3002/api/auth'; // Full backend URL

export const register = (userData) => axios.post(`${API}/register`, userData);

export const login = (credentials) => axios.post(`${API}/login`, credentials);

export const googleLogin = (token) => axios.post(`${API}/google-login`, { token });

export const logout = () => {
  localStorage.removeItem('token');
};

export const getToken = () => localStorage.getItem('token');

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const getCurrentUser = async () => axios.get(`${API}/me`);