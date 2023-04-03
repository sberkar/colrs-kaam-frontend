import axios from "axios";

const BASE_URL = "https://kaam-backend.cyclic.app/api";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "Application/json",
  },
  withCredentials: true,
});
