import { createContext, useEffect, useState } from "react";
import * as postApi from "../../../api/post";
import * as likeApi from "../../../api/like";

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postApi
      .getAllPostIncludeFriendPost()
      .then((res) => setPosts(res.data.posts))
      .catch((err) => console.log(err));
  }, []);

  const createPost = async (formData) => {
    await postApi.createPost(formData);
  };

  const toggleLike = async (postId) => {
    await likeApi.toggleLike(postId);
  };
  return (
    <PostContext.Provider value={{ createPost, posts, toggleLike }}>
      {children}
    </PostContext.Provider>
  );
}
