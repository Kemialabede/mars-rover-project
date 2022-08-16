import axios from 'axios';
import NProgress from 'nprogress';

const instance = axios.create({
    baseURL: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`,
    timeout: 0,
    headers: {
        'Content-Type': 'application/json'
    },
    params: {
        api_key: 'pU1faUYzbtCXh2HxvtfyEr3CbdFn9PUj5wdGeDel',
        sol: 1000
    }
});
instance.interceptors.request.use((config) => {
    return config;
});

instance.interceptors.response.use(
    (response) => {
        NProgress.done();
        return response;
    },
    (error) => {
        NProgress.done();
        return Promise.reject(error);
    }
);
export default instance;
