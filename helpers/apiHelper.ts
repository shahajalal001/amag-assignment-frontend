import axios from "axios"

//apply base url for axios
const API_URL = process.env.backend_url + "api"

const axiosApi = axios.create({
  baseURL: API_URL,
  validateStatus: function (status) {
    return status >= 200 && status < 600 // default
  },
})

axiosApi.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
)

export async function get(url:string, data:any, config = {}) {
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('token') ?? ''}`
  return await axiosApi.get(url, {...config, params: data}).then(response => response.data)
}

export async function post(url:string, data:any, config = {}) {
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('token') ?? ''}`
  return axiosApi
      .post(url, data, {...config})
      .then(response => response.data)
}

export async function put(url:string, data:any, config = {}) {
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('token') ?? ''}`
  return axiosApi
      .put(url, {...data}, {...config})
      .then(response => response.data)
}

export async function del(url:string, data:any, config = {}) {
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('token') ?? ''}`
  return await axiosApi
      .delete(url, {...config, params: data})
      .then(response => response.data)
}