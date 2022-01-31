import axios from 'axios';

export default function getData({ section, page, name }) {
  if (name && page > 1) {
    return axios
      .get(
        `https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`
      )
      .then((res) => res);
  }
  if (name) {
    return axios
      .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then((res) => res)
      .catch((err) => 'error');
  }
  if (page === undefined) {
    return axios
      .get(`https://rickandmortyapi.com/api/${section}`)
      .then((res) => res);
  }
  return axios
    .get(`https://rickandmortyapi.com/api/${section}/?page=${page}`)
    .then((res) => res);
}
