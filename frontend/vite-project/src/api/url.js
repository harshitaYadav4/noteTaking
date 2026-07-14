import axios from "axios";

const Backend_URL = axios.create({
    baseURL: "http://localhost:6000/api/V1/noteapp/"
});

export default Backend_URL;
