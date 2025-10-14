import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8081", // backend port
});

export default API;