import axios from 'axios';
import querystring from 'query-string';
import tokenService from '../services/TokenAuthenticateService';

/**
 * 
 * as a midleware for handle request, response return from api server
 * http://localhost:500/api/
 */
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_URL_API_DEV,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => querystring.stringify(params),
});

axiosClient.interceptors.request.use(function (config) {
  // Do something before request is sent
  var token = tokenService.getAccessToken();
  
  if (token) {
    config.headers['Authorization'] = "Bearer " + token;
  }
  return config;

}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, async function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  debugger
  var originalConfig = error.config;
  if (originalConfig.url !== "/users/login" && error.response) {
    if (error.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const rs = await axiosClient.post("/users/refresh", {
          AccessToken: tokenService.getAccessToken(),
          RefreshToken: tokenService.getRefreshToken(),
        });
        const { token } = rs.data;
        tokenService.updateLocalAccessToken(token);
        return axiosClient(originalConfig);
      }
      catch (_error) {
        return Promise.reject(_error);
      }
    }
  }
  return Promise.reject(error);
});


export default axiosClient;
