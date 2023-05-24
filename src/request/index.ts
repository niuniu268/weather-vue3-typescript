import axios from 'axios'

const service = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    timeout: 5000,
    headers:{
        "Content-Type": "application/json; charset=utf-8"
        }
    }
)
export default service