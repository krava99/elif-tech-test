import axios, { AxiosError } from "axios";

export type ApiError = AxiosError<{ error: string }>;

export const globalApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
});
