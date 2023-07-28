import axios from 'axios';
import router from '../router'; // Importa el enrutador de tu proyecto Vue.js

const instance = axios.create({
  /* baseURL: 'http://192.168.16.105/validador/', */
  baseURL: 'http://192.168.96.36:8081/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de solicitud
instance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
      config.headers['Authorization'] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de respuesta
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      router.push('/login'); // Redirige a la página de inicio de sesión
    }
    return Promise.reject(error);
  }
);

export default instance;