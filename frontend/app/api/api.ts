import axios, { AxiosError } from "axios";

export type ApiError = AxiosError<{ error: string }>;

export const globalApi = axios.create({
  baseURL: "https://elif-tech-test.onrender.com",
});
