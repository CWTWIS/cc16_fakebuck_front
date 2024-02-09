import { createContext, useEffect, useState } from "react";
import * as PostApi from "../../../api/post";
import { toast } from "react-toastify";

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    PostApi.getAllPostIncludeFriendPost().then((res) =>
      setPosts(res.data.posts).catch((err) => console.log(err))
    );
  }, []);
  const createPost = async (formData) => {
    await PostApi.createPost(formData);
    // toast.success("create a new post success");
  };
  return (
    <PostContext.Provider value={{ createPost, posts }}>
      {children}
    </PostContext.Provider>
  );
}
