import axios from 'axios';

// const url = 'https://bch-devmatch-server-develop.rxnniiee.dev/'
// const url = 'http://localhost:5000';
const url = 'https://jobupbackend.herokuapp.com';

//From MongoDB Backe-end
//Talent endpoints
export const login = (user) => axios.post(`${url}/auth/login`, user);
export const signupTalent = talent => axios.post(`${url}/auth/signup`, talent);
export const getTalent = talent => axios.get(`${url}/talents/${talent}`)
export const updateTalent = (id, talentProfile) => axios.post(`${url}/talents/${id}`, talentProfile)

//from SQL Back-end
export const fetchTalentProfile = () => axios.get(`${url}user/profile`);
export const fetchTalentMatches = () => axios.get(`${url}user/matches`);
export const fetchTalentQueue = () => axios.get(`${url}user/queue`);