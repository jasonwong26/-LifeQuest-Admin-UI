import { BlogPostsState, BlogPost } from "./_types";
import { buildCollectionReducer } from "../../shared";

const collectionName = "blogposts";

export const initialState: BlogPostsState = {
  data: [],
  loading: false,
  saving: false,
  deleting: false,
  errors: undefined
};

export const reducer = buildCollectionReducer<BlogPost>(collectionName);
