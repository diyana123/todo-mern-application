import axios from "axios";

const customFetch = axios.create({
    baseURL: "development" === 'development' ? '/api' : 'api/v1',
});

export default customFetch;
