import axios from "axios";

const https = axios.create({
  baseURL: "http://localhost:3001",
});
export default https;
