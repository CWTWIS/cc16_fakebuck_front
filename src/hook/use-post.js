import { useContext } from "react";
import { PostContext } from "../features/post/contexts/PostContext";

export default function usePost() {
  return useContext(PostContext);
}
