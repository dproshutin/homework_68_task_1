import axios from "axios";

const instance = axios.create({
    baseURL: "https://homework-68-e37e5.firebaseio.com/"
});

export default instance;