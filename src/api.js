import axios from 'axios';
import 'dotenv/config';

const api = axios.create({
    baseURL:"http://localhost:9000"
});

export {api};