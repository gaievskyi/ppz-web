import axios from 'axios'

export const httpClient = axios.create({
  baseURL: 'http://172.105.250.115:8000/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})
