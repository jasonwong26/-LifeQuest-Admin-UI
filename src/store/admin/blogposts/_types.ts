import { ApiModel, CollectionState } from "../../shared";

export interface BlogPost extends ApiModel {
  title: string,
  content: string,
  publishDate?: Date
}

export interface BlogPostsState extends CollectionState<BlogPost>{
}
