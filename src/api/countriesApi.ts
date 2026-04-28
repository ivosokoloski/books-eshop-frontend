import type { Country, CountryDetails } from './types/country'; 
import axiosInstance from '../axios/axios.ts';
const countriesApi = {
  findAll: async () => {
    return await axiosInstance.get<Country[]>('/countries');
  },
  findWithDetailsById: async (id: string) => {
    return await axiosInstance.get<CountryDetails>(`/countries/${id}`);
  }
};

export default countriesApi;   