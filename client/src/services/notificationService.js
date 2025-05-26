// src/services/notificationService.js
import axios from 'axios';

const API = '/api/notifications';

export const sendSMS = (phone, message) =>
  axios.post(`${API}/sms`, { phone, message });

export const sendEmail = (email, subject, message) =>
  axios.post(`${API}/email`, { email, subject, message });

export const getInAppNotifications = () =>
  axios.get(`${API}/in-app`);

export const markNotificationRead = (notificationId) =>
  axios.put(`${API}/in-app/${notificationId}/read`);