import { Post } from './model/Post';
import { Action } from './Action';

export interface AppState {
  errors: string[];
  isLoading: boolean;
  posts: Post[];
  subreddit: string;
}

export const INITIAL_STATE: AppState = {
  errors: [],
  isLoading: false,
  posts: [],
  subreddit: '',
};

export function reducer(state: AppState, action: Action) {
  switch (action.type) {
    case 'ClearSubreddit':
      return INITIAL_STATE;
    case 'ReceiveErrors':
      return {
        ...state,
        errors: action.errors,
        isLoading: false,
      };
    case 'ReceivePosts':
      return {
        ...state,
        errors: [],
        isLoading: false,
        posts: action.posts,
      };
    case 'SelectSubreddit':
      return {
        ...state,
        errors: [],
        isLoading: true,
        subreddit: action.subreddit,
      };
    default:
      throw new Error('Unknown action type; should not happen.');
  }
}
