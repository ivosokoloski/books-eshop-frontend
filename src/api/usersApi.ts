import axiosInstance from '../axios/axios.ts';
import type { User, UserDetails } from './types/user';

const userApi = {
  findAll: async () => {
    return await axiosInstance.get<User[]>('/users');
  },
  findWithDetailsById: async (id: string) => {
    return await axiosInstance.get<UserDetails>(`/users/${id}`);
  }
};

export default userApi;   