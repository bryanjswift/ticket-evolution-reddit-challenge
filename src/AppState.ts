import { Post } from './model/Post';
import { Action } from './Action';

export interface AppState {
  errors: string[];
  isLoading: boolean;
  posts: Post[];
  sortOrder: string;
  sortedPosts: Post[];
  subreddit: string;
}

export const INITIAL_STATE: AppState = {
  errors: [],
  isLoading: false,
  posts: [],
  sortOrder: 'default',
  sortedPosts: [],
  subreddit: '',
};

function compareByDate(p1: Post, p2: Post) {
  return p2.created_utc - p1.created_utc;
}

function compareByVotes(p1: Post, p2: Post) {
  return (p2.num_comments + p2.ups) - (p1.num_comments + p1.ups);
}

function getSortedPosts(posts: Post[], sortOrder: string): Post[] {
  // create a copy of the input becausing `Array.prototype.sort` mutates the
  // `Array` on which it operates
  let result = [ ...posts ];
  switch (sortOrder) {
    case 'date':
      return result.sort(compareByDate);
    case 'popularity':
      return result.sort(compareByVotes);
    default:
      return posts;
  }
}

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
        sortOrder: 'default',
        sortedPosts: getSortedPosts(action.posts, 'default'),
      };
    case 'SelectSubreddit':
      return {
        ...state,
        errors: [],
        isLoading: true,
        subreddit: action.subreddit,
      };
    case 'UpdateSort':
      return {
        ...state,
        sortOrder: action.order,
        sortedPosts: getSortedPosts(state.posts, action.order),
      };
    default:
      throw new Error('Unknown action type; should not happen.');
  }
}
