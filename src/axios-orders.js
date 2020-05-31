import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-react-c67a8.firebaseio.com/'
});

export default instance