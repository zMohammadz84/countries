import axios from "axios";

const https = axios.create({
  baseURL: "https://countries-data-seven.vercel.app",
});
export default https;
