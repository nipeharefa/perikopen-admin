import axiosInstance from 'axios';

const baseUrl = process.env.REACT_APP_API_URL || 'https://perikopen-api.nias.dev';
const axios = axiosInstance.create({
  baseURL: baseUrl,
  headers: {
    'Accept': 'application/json',
  }
});

const NetworkService = () => ({
  getWeeks: () => {
    return axios.get('/api/weeks')
  },
  createWeek: () => {},
  // Schedule
  createSchedule: (data) => {
    return axios.post('/api/service_schedules', data);
  },
  getSchedules: () => {
    return axios.get('/api/service_schedules');
  }
});

export default NetworkService();
