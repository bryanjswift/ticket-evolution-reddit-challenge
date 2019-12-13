import React, { useReducer } from 'react';
import { SubredditSelector } from './components/SubredditSelector';
import { Post } from './model/Post';
import { Action } from './Action';
import './App.css';

interface State {
  isLoading: boolean;
  posts: Post[];
  subreddit: string;
}

const INITIAL_STATE: State = {
  isLoading: false,
  posts: [],
  subreddit: '',
};

function reducer(state: State, action: Action) {
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

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  console.log(state);
  return (
    <div className="App">
      <SubredditSelector dispatch={dispatch} />
    </div>
  );
}

export default App;
