import Api from "./api";

const mainEndpoint = "users";

const AuthEndpoints = {
  login(data) {
    return Api().post(`/v1/${mainEndpoint}/login`, data);
  },
};
export default AuthEndpoints;
