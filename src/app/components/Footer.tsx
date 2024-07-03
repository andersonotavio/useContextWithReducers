import { useContext } from "react";
import { PostContext } from "../context/PostContext";

export const Footer = () => {
  const postsCtx = useContext(PostContext);
  return <footer>Número de post {postsCtx?.posts.length}</footer>;
};
