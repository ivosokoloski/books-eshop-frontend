import type { Country, CountryDetails, CountryFormData } from './types/country'; 
import axiosInstance from '../axios/axios.ts';
const countriesApi = {
  findAll: async () => {
    return await axiosInstance.get<Country[]>('/countries');
  },
  findWithDetailsById: async (id: string) => {
    return await axiosInstance.get<CountryDetails>(`/countries/${id}`);
  },
  add: async (data: CountryFormData) => {
    const response = await axiosInstance.post<Country>('/countries/add', data);
    return response;
  },
  edit: async (id: string, data: CountryFormData) => {
    return await axiosInstance.put<Country>(`/countries/${id}/edit`, data);
  },
  delete: async (id: string) => {
    return await axiosInstance.delete<Country>(`/countries/${id}/delete`);
  }
};

export default countriesApi;   