import axios from "axios";

const API = () => {
  return axios.create({
    baseURL: `https://booking-react-backend.vercel.app/api`,
    // baseURL: `http://localhost:4050/api`,
  });
};
export default API;
