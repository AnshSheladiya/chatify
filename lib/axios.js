import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.29.223:3000/', // Your API base URL
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need
  },
});

export default axiosInstance;
