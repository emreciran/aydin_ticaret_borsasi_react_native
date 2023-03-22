import axios from "axios";
const BASE_URL = "https://3c0e-212-253-124-232.eu.ngrok.io/api";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
