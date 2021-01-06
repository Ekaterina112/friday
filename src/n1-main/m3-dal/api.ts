import axios from 'axios'


const instance = axios.create({
    baseURL: '',
    withCredentials: true,
    headers: {
        'API-KEY': ''
    }
})

//api
export const nameAPI = {}


//types
export type nameType = {}

