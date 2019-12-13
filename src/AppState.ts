import { Post } from './model/Post';
import { Action } from './Action';

export interface AppState {
  isLoading: boolean;
  posts: Post[];
  subreddit: string;
}

export const INITIAL_STATE: AppState = {
  isLoading: false,
  posts: [],
  subreddit: '',
};

export function reducer(state: AppState, action: Action) {
  switch (action.type) {
    case 'ClearSubreddit':
      return INITIAL_STATE;
    case 'ReceivePosts':
      return {
        ...state,
        isLoading: false,
        posts: action.posts,
      };
    case 'SelectSubreddit':
      return {
        ...state,
        isLoading: true,
        subreddit: action.subreddit,
      };
    default:
      throw new Error('Unknown action type; should not happen.');
  }
}