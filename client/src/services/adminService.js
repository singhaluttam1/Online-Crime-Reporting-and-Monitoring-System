// src/services/adminService.js
import axios from 'axios';

const API = '/api/admin';

export const getAllUsers = () => axios.get(`${API}/users`);

export const updateUserRole = (userId, role) =>
  axios.put(`${API}/users/${userId}`, { role });

export const deleteUser = (userId) => axios.delete(`${API}/users/${userId}`);

export const getSystemLogs = () => axios.get(`${API}/logs`);

export const getReportsAnalytics = () => axios.get(`${API}/analytics`);