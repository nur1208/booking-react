import Api from "./api";

const mainEndpoint = "auth";

const AuthEndpoints = {
  login(data) {
    return Api().post(`/v1/${mainEndpoint}/login`, data);
  },
  register(data) {
    return Api().post(`/v1/${mainEndpoint}/register`, data);
  },
};
export default AuthEndpoints;
