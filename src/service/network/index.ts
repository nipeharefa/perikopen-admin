import axiosInstance, { AxiosResponse } from 'axios';

const baseUrl = process.env.REACT_APP_API_URL || 'https://perikopen-staging-api.nias.dev';
console.log(baseUrl);
const axios = axiosInstance.create({
  baseURL: baseUrl,
  headers: {
    'Accept': 'application/json',
  },
});

const NetworkService = () => ({
  getFormURL: (url: string) : Promise<AxiosResponse> => {
    return axios.get(url)
  },
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
  },
  // Dress Code
  getDressCodes: (): Promise<AxiosResponse> => {
    return axios.get('/api/dress_codes');
  },
  createDressCode: (dressCode: Object): Promise<AxiosResponse> => {
    return axios.post('api/dress_codes', dressCode);
  },
  deleteDressCode: (id: Int16Array) : Promise<AxiosResponse> => {
    return axios.delete(`/api/dress_codes/${id}`);
  },
  // Perikopen
  createPerikopen: (perikopen: Object): Promise<AxiosResponse> => {
    return axios.post('/api/perikopens', perikopen, { headers: {'content-type': 'application/json'}});
  },
  getPerikopens: (): Promise<AxiosResponse> => {
    return axios.get('/api/perikopens');
  },
  getPerikopen: (id: Number) :Promise<AxiosResponse> => {
    return axios.get(`/api/perikopens/${id}`);
  },
  addKJToPerikopen: (data: Object) : Promise<AxiosResponse> => {
    return axios.post('/api/perikopen-kj', data, { headers: {'content-type': 'application/json'}});
  },
  // Book
  getBibleBookCollection: (): Promise<AxiosResponse> => {
    return axios.get('/api/books_of_bibles.json');
  },
  getPerikopenKidungJemaat: (perikopenId: Number) : Promise<AxiosResponse> => {
    return axios.get(`api/perikopen/${perikopenId}/kj`);
  },

  // Kidung Jemaat
  getKidungJemaat: () : Promise<AxiosResponse> => {
    return axios.get('api/kidung_jemaats');
  },
  getWorships: () : Promise<AxiosResponse> => {
    return axios.get('api/worships');
  },
});

export default NetworkService();
