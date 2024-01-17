import {$authHost, $host} from "./index"
import { jwtDecode } from "jwt-decode"

export const getUserId = async () => {
    const userEmail = getUserEmail();
    const {data} = await $authHost.get(`api/user/get-id/${userEmail}`)
    return data.userId
}

export const getUserEmail = async () =>{
    try {
        const token = localStorage.getItem('token');

        const {decodedToken} = jwtDecode(token);

        const userEmail = decodedToken.email;

        console.log(userEmail);
    }catch (error) {
        console.error(error);
        throw error;
    }

}

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'USER'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}