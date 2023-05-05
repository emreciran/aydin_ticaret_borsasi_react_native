import axios from "axios";
const BASE_URL = "https://7e9e-212-253-124-232.ngrok-free.app/api";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
