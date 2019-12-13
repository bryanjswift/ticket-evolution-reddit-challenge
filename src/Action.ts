import { Post } from './model/Post';

interface ReceiveErrors {
  type: 'ReceiveErrors';
  errors: string[];
}

interface ClearSubreddit {
  type: 'ClearSubreddit';
}

interface ReceivePosts {
  type: 'ReceivePosts';
  posts: Post[];
}

interface SelectSubreddit {
  type: 'SelectSubreddit';
  subreddit: string;
}

interface UpdateSort {
  type: 'UpdateSort';
  order: string;
}

export type Action = ClearSubreddit | ReceiveErrors | ReceivePosts | SelectSubreddit | UpdateSort;
