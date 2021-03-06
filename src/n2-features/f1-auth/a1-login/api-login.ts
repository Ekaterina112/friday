import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7542/2.0/'
})


export const authAPI = {
    getAuth() {
        return instance.post(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password, rememberMe})
        //.data
    },
    logout() {
        return instance.delete('auth/login')
    }
}

//types
export type nameType = {}

