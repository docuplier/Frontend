import axios from "axios";
import { BASE_URL } from "constants/appConstants";

const Api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export default Api;
