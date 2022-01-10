import Axios from 'axios'
export const axios = Axios.create({
  baseUrl: 'http://176.96.243.111:8081/',
  headers: { Auth: 'Bearer' },
  timeout: 10000,
})
