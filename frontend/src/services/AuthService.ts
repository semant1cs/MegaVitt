import axios from "axios";

// const backAPIURL = import.meta.env.BASE_URL

class AuthService {
    async register(url: string) {
        return axios({
            method: "post",
            url: url,
            data: {},
            headers: {"Content-Type": "application/json"}
        });
    }
}