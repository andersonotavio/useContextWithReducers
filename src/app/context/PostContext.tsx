import {
  Dispatch,
  ReactNode,
  createContext,
  useReducer,
  useState,
} from "react";
import { Posts } from "../types/Posts";
import { PostActions, postReducer } from "../reducers/PostReducer";

type PostContextType = {
  posts: Posts[];
  dispatch: Dispatch<PostActions>;
};

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, dispatch] = useReducer(postReducer, []);

  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
