import { createContext } from "react";
import * as PostApi from "../../../api/post";
import { toast } from "react-toastify";

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const createPost = async (formData) => {
    await PostApi.createPost(formData);
    toast.success("create a new post success");
  };
  return (
    <PostContext.Provider value={{ createPost }}>
      {children}
    </PostContext.Provider>
  );
}
