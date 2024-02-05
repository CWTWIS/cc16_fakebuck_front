import axios from "../config/axios";
export const register = (user) => axios.post("/auth/register", user);
export const login = (credential) => axios.post("/auth/login", credential);
// SUCCESS ===> res obj {data, config,...}
// ERROR ===> res obg {code, config, message, response(data, message: "....")}
