import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export async function fetchPortfolio() {
  const { data } = await api.get('/portfolio')
  return data
}

export async function sendContact(payload) {
  const { data } = await api.post('/contact', payload)
  return data
}

export default api
