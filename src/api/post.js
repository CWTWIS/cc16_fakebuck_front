import axios from "../config/axios";
export const createPost = (formData) => axios.post("/posts", formData);
export const getAllPostIncludeFriendPost = () => axios.get("/posts/friends");
