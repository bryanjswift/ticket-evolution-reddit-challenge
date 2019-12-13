import { Post } from './model/Post';

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

export type Action = ClearSubreddit | ReceivePosts | SelectSubreddit;
