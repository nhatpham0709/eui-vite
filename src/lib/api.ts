import axios from 'axios'
const api = axios.create({
  // .. where we make our configurations
  baseURL: import.meta.env.VITE_API_URL
})

api.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'

api.interceptors.request.use(request => {
  console.log(request)
  // Edit request config
  return request
})

export default api
