import axios from 'axios';
import Router from 'next/router';
export let baseURL;
if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://goalma.dev/private/';
} else {
  baseURL = 'https://goalma.dev/private/';
}

// interceptors method
axios.interceptors.response.use(
  (response) => {
    const code = response.data.code || 200;
    // console.log(code);
    if (code == 403) {
      localStorage.removeItem('token');
      Router.push('/');
    } else if (code == 401) {
      localStorage.removeItem('token');
      Router.push('/');
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.request.use(
  (config) => {
    // console.log(config);
    config.baseURL = baseURL;
    config.timeout = 200000;
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axios with get
export function getAxios({ url, params = {} }) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// axios with post
export function postAxios({ url, data }) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'post',
      data,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default axios;
