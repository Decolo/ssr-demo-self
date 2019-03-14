import axios from 'axios'
import { baseURL } from '@/api'

const fetch = options => {
  const params = {
    baseURL,
    ...options
  }
  const { method } = options

  if (method.toUpperCase() === 'GET') {
    params.params = params.data
    delete params.data
  }
  return axios(params).then(res => {
    return res.data
  }).catch(error => {
    console.log(error)
  })
}

export default fetch