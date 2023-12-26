import type HttpOptions from "@/types/HttpOptions"
import { merge } from 'lodash'

export default function (resource: RequestInfo | URL, options: HttpOptions = {}): Promise<Response> {
  let headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
  if (localStorage.getItem('token')) {
    headers = merge(headers, {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  }
  return new Promise((resolve, reject) => {
    fetch(resource, merge({
      headers,
    }, options))
      .then(async (response) => {
        const data = await response
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
