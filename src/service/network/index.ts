import axiosInstance, { AxiosResponse, AxiosTransformer } from 'axios';

const baseUrl = process.env.REACT_APP_API_URL || 'https://perikopen-api.nias.dev';
const axios = axiosInstance.create({
  baseURL: baseUrl,
  headers: {
    'Accept': 'application/json',
  }
});

const NetworkService = () => ({
  getWeeks: () : Promise<AxiosResponse> => {
    return axios.get('/api/weeks')
  },
  createWeek: () => {},
  deleteWeek: (id: Int16Array) => {
    return axios.delete(`/api/weeks/${id}`);
  },
  // Schedule
  createSchedule: (data: any) => {
    return axios.post('/api/service_schedules', data);
  },
  getSchedules: (): Promise<AxiosResponse> => {
    return axios.get('/api/service_schedules');
  },
  deleteSchedule: (id: Int16Array): Promise<AxiosResponse> =>{
    return axios.delete(`/api/service_schedules/${id}`);
  },
  // Agendre
  getAgendrees: (): Promise<AxiosResponse> => {
    return axios.get('/api/worships');
  },
  createAgendre: (worship: Object) => {
    return axios.post('/api/worships', worship)
  },
  deleteAgendre: (id: Int16Array) : Promise<AxiosResponse> => {
    return axios.delete(`/api/worships/${id}`);
  }
});

export default NetworkService();
