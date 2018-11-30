import axios from 'axios'

const instance = axios.create({
  baseURL: getApiUrl()
})

export function getApiUrl () {
  return 'https://fista-cms-api.herokuapp.com/'
}

function getJsonHeaders () {
  return {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
}

export function getJson (url) {
  return instance.get(url, getJsonHeaders())
}

export function putJson (url, data) {
  return instance.put(url, JSON.stringify(data), getJsonHeaders())
}

export function postJson (url, data) {
  return instance.post(url, JSON.stringify(data), getJsonHeaders())
}
