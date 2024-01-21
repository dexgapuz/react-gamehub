import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '30eb83bea8ce476cb310b3ca1bf6fc14'
    }
});
