import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org',
  params: {
    api_key: 'fffdc0e9123f3943573fdf948dd21681',
    language: 'pt-BR',
  },
});
export default api;
