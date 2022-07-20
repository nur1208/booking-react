import axios from "axios";

const API = (userToken) => {
  return axios.create({
    // baseURL: `https://booking-react-backend.vercel.app/api`,
    baseURL: `http://localhost:4050/api`,
    headers: { access_token: userToken },
  });
};
export default API;
