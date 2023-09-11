import axios from "axios";

const Axios = axios.create({
    baseURL: import.meta.env.VITE_BACKENDURL_DEV,
    headers: {
        "Content-Type": "application/json",
    }
});

export default Axios;