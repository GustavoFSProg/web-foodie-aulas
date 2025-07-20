import axios from "axios";

const api = axios.create({
  // baseURL: "http://192.168.0.4:3001",
  baseURL: "https://app-delivery-reactnative-api-curso.onrender.com/",
  timeout: 10000,
});

export default api;
