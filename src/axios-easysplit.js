import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://finance-manager-adb21.firebaseio.com/",
});

export default axiosInstance;
