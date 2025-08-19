import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // 👈 change later for production
});

export default api;
