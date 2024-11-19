import axios from "axios";
import { LoginPayload, LoginResponse } from "../types/auth";

const API_URL = "https://social-login.druckland.de/api/v1/user/signin";

export const loginUser = async (data: LoginPayload): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(API_URL, data);
  return response.data;
};

export const saveToken = (token: string) => {
  localStorage.setItem("authToken", token);
};

export const removeToken = () => {
  localStorage.removeItem("authToken");
};

export const getToken = (): string | null => {
  return localStorage.getItem("authToken");
};
