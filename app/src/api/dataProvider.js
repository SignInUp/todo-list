import axios from 'axios'
import { API_URL } from './config'

export const GET = 'GET'
export const POST = 'POST'
export const DELETE = 'DELETE'
export const PUT = 'PUT'

export default async (url, method, params) => {
  let response = {}
  switch (method) {
    case GET: {
      const resp = await axios.get(`${API_URL}/url`)
      response = resp.datas
      break
    }
    case POST: {
      break
    }
    case DELETE: {
      break
    }
    case PUT: {
      break
    }
    default: return
  }
  return response
}
