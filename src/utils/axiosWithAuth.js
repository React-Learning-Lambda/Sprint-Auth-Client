import axios from "axios";

const axiosWithAuth = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:4003/api',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        }
    })

    return instance;
}

export default  axiosWithAuth;