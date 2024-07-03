import { Posts } from "../types/Posts";

type AddAction = {
  type: "add";
  payload: {
    title: string;
    body: string;
  };
};
type Remove = {
  type: "remove";
  payload: { id: number };
};

export type PostActions = AddAction | Remove;
export const postReducer = (posts: Posts[], action: PostActions) => {
  switch (action.type) {
    case "add":
      return [
        ...posts,
        {
          id: posts.length,
          title: action.payload.title,
          body: action.payload.body,
        },
      ];
    case "remove":
      return posts.filter((p) => p.id !== action.payload.id);
    default:
      return posts;
  }
};
