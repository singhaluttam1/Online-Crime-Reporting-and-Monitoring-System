// src/services/crimeService.js
import axios from 'axios';

const API = '/api/police';

export const reportCrime = (crimeData) =>
  axios.post('/api/public/report-crime', crimeData);

export const getCriminals = (search = '') =>
  axios.get(`${API}/criminals?search=${search}`);

export const getFIRs = () => axios.get(`${API}/firs`);

export const updateFIRStatus = (id, status) =>
  axios.put(`${API}/firs/${id}`, { status });

export const getLiveStats = () => axios.get(`${API}/stats`);

export const getHeatmapData = () => axios.get(`${API}/heatmap`);