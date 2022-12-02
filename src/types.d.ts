export interface Post {
  id: string;
  title: string;
  description: string;
  dateTime: string;
}

export type PostApi = Omit<Post, 'id'>;

export interface PostList {
  [id: string]: Post;
}

export interface About {
  id: string;
  title: string;
  me: string;
  study: string;
  developing: string;
  ready: string;
}

export interface AboutType {
  [id: string]: About;
}