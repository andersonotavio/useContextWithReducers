import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { Posts } from "../types/Posts";
import { PostActions, postReducer } from "../reducers/PostReducer";

const STORAGE_KEY = "postsContextContent";
type PostContextType = {
  posts: Posts[];
  dispatch: Dispatch<PostActions>;
};

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, dispatch] = useReducer(
    postReducer,
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);
