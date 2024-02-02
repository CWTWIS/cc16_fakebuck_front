import axios from "../config/axios";
export const register = (user) => axios.post("/auth/register", user);
// SUCCESS ===> res obj {data, config,...}
// ERROR ===> res obg {code, config, message, response(data, message: "....")}
