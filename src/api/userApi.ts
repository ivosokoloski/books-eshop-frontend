import axiosInstance from "../axios/axios.ts";
import type { User, UserFormData } from "./types/user.ts";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "./types/user.ts";

const userApi = {
  register: async (data: RegisterRequest) => {
    return await axiosInstance.post<RegisterResponse>("/users/register", data);
  },
   findAll: async () => {
      return await axiosInstance.get<User[]>('/users');
    },
  login: async (data: LoginRequest) => {
    return await axiosInstance.post<LoginResponse>("/users/login", data);
  },
 
  edit: async (id: string, data: UserFormData) => {
    return await axiosInstance.put<User>(`/users/${id}/edit`, data);
  },
  delete: async (id: string) => {
    return await axiosInstance.delete<User>(`/users/${id}/delete`);
  },
};

export default userApi;
