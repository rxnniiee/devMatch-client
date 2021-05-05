import axios from 'axios';

const url = 'https://devmatchserver.rxnniiee.dev'

export const login = (user) => axios.post(`${url}/auth/login`, {login: user.username, password: user.password});