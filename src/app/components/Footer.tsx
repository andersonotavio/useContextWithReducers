import { usePosts } from "../context/PostContext";

export const Footer = () => {
  const postsCtx = usePosts();
  return <footer>Número de post {postsCtx?.posts.length}</footer>;
};
