import axios from "axios";
const BASE_URL = "https://192.168.25.135:8082/api";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
