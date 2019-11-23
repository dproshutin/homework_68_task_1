import axios from "axios";

const instance = axios.create({
    baseURL: "https://burger-b21da.firebaseio.com/"
});

export default instance;