import axios from "axios";

// define app API url
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// configure headers
axios.interceptors.request.use(
  (config) => {
    if (config.headers && !config.headers.Authorization) {
      const token = localStorage.getItem("authToken");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
