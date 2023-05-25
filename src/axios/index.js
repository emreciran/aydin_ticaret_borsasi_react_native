import axios from "axios";
import { REACT_APP_API_URL } from "@env";

const BASE_URL = `${REACT_APP_API_URL}/api`;

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
