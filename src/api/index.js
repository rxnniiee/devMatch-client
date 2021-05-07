import axios from 'axios';

const url = 'https://bch-devmatch-server-develop.rxnniiee.dev/'

export const login = (user) => axios.post(`${url}/auth/login`, {login: user.username, password: user.password});

export const fetchTalentProfile = () => axios.get(`${url}user/profile`);
export const fetchTalentMatches = () => axios.get(`${url}user/matches`);
export const fetchTalentQueue = () => axios.get(`${url}user/queue`);