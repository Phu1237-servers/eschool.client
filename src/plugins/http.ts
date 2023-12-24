import type HttpOptions from "@/types/HttpOptions"
import lodash from 'lodash'

export default function (resource: RequestInfo | URL, options: HttpOptions = {}) {
  let headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': '',
  }
  if (localStorage.getItem('token')) {
    headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
  }
  return new Promise((resolve, reject) => {
    fetch(resource, lodash.merge({
      headers,
    }, options))
      .then(async (response) => {
        const data = await response.json()
        if (response.ok) {
          resolve(data)
        } else {
          reject(data)
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}
