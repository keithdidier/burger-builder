import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-22f3d.firebaseio.com/'
});

export default instance;