import axios from 'axios';

const service = axios.create({
  timeout: 60000,
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      "X-Requested-With": "XMLHttpRequest",
  },
  baseURL: 'xxx',
});


const serviceForm = axios.create({
  timeout: 60000,
  headers: {
      'Content-Type': 'multipart/form-data; charset=UTF-8',
      "X-Requested-With": "XMLHttpRequest",
  },
  baseURL: 'xxx',
});


axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

