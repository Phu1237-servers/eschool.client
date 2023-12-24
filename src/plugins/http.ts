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
  return fetch(resource, lodash.merge(options, { headers }))

}
