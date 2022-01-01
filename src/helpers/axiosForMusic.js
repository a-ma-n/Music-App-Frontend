import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
})

const axiosForMusic = axios.create({
  adapter: cache.adapter, // we are using this cache adapter to improve performance
  baseURL: 'http://localhost:4000',
})

axiosForMusic.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  },
)

export default axiosForMusic
