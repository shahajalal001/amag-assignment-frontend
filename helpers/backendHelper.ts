import {get, post, put} from "./apiHelper"

export const postLogin = (data?:any) => post('/user/login', data)
export const fetchProfile = (data?:any) => get('/user/verify', data)
export const postRegister = (data?:any) => post('/user/register', data)

export const getSite = (data?:any) => get('/site', data)
export const getSites = (data?:any) => get('/site/all', data)
export const postSite = (data?:any) => post('/site', data)
export const putSite = (data?:any) => put('/site', data)
