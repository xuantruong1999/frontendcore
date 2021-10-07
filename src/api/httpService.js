import axios from 'axios';
import querystring from 'query-string';

/**
 * 
 * as a midleware for handle request, response return from api server
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
    var token = localStorage.getItem("authJWT");
    config.headers.common['Authorization'] = "Bearer" + " " + token;
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
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });


export default axiosClient;
