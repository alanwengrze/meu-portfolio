import axios from "axios";

const fetchRepos = axios.create({
    baseURL:'https://api.github.com/users/alanwengrze',

    headers: {
        "Content-type": "application/json",
        
    }
})

export default fetchRepos