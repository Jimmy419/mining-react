import axios from 'axios'

// Add a response interceptor
axios.interceptors.response.use(
  // eslint-disable-next-line
  (response) => {
    return response
  },
  (error) => {
    console.log('error', error)
    alert(error)
    // Do something with response error
    return Promise.reject(error)
  }
)

export default axios
