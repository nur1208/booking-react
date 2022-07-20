import Api from "./api";

const GenericEndpoints = {
  get(path, userToken) {
    return Api(userToken).get(`/v1/${path}`);
  },
  delete(path, id, userToken) {
    return Api(userToken).delete(`/v1/${path}/${id}`);
  },
  post(path, data, userToken, id) {
    let url = id ? `/v1/${path}/${id}` : `/v1/${path}`;
    return Api(userToken).post(url, data);
  },
};
export default GenericEndpoints;
