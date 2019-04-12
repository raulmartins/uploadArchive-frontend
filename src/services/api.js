import axios from 'axios'

const api = axios.create({
  baseURL: 'https://uploadarchive-backend.herokuapp.com'
})

export default api