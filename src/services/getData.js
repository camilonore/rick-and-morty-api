import axios from 'axios'

export default function getData ({ section = null, page = null, name = null }) {
  if (name) {
    return axios
      .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then(res => res)
      .catch(err => err.toJSON())
  }
  if (section && page === null) {
    return axios
      .get(`https://rickandmortyapi.com/api/${section}`)
      .then(res => res)
      .catch(err => err.toJSON())
  }

  if (section && page) {
    return axios
      .get(`https://rickandmortyapi.com/api/${section}/?page=${page}`)
      .then(res => res)
      .catch(err => err)
  }
}
