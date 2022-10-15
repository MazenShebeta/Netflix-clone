import axios from "axios";

const instance = axios.create({
    //key 0d2f45106f8161ceb602ef032544747a
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;