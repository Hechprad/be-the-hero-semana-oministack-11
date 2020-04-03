import axios from "axios";

const api = axios.create({
  // Altere aqui, de acordo com o seu, o endereço de IP.
  baseURL: "http://192.168.15.19:3333"
});

export default api;
