import axios from "axios";

const api = axios.create({
  baseURL: "https://bodyart.ddnsking.com/api",
});

export default api;