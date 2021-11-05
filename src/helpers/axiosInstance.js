import axios from 'axios';

// Request interceptor for API calls

const Axios = () => {
  const axiosApiInstance = axios.create({
    baseURL: 'http://18.219.122.15:8000/api/',
  });

  axiosApiInstance.interceptors.request.use(
    async (config) => {
      const state = JSON.parse(localStorage.getItem('persist:primary'));
      const auth = JSON.parse(state.auth);
      const token = auth.token;
      if (token) {
        config.headers = {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        };
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    },
  );

  // Response interceptor for API calls
  axiosApiInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (err) {
      const status = err.status || (err.response ? err.response.status : 0);
      if (status === 403 || status === 401) {
        localStorage.removeItem('persist:primary');
      }
      return Promise.reject(err);
    },
  );
  return axiosApiInstance;
};

export default Axios;
