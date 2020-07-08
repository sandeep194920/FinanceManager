import axios from "axios";
console.log("REached axios instance");

const axiosInstance = axios.create({
  baseURL: "https://finance-manager-adb21.firebaseio.com/",
});

export default axiosInstance;
