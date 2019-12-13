import React, { Dispatch, useReducer } from 'react';
import { SubredditSelector } from './components/SubredditSelector';
import { SubredditView } from './components/SubredditView';
import { Action } from './Action';
import { fetchPosts } from './Api';
import { INITIAL_STATE, reducer } from './AppState';
import './App.css';

async function fetchPostData(subreddit: string, dispatch: Dispatch<Action>) {
  try {
    const posts = await fetchPosts({ name: subreddit });
    dispatch({ type: 'ReceivePosts', posts });
  } catch (e) {
    dispatch({ type: 'ReceiveErrors', errors: [e.message] });
  }
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { isLoading, subreddit } = state;
  console.log(state);
  if (isLoading) {
    fetchPostData(subreddit, dispatch);
  }
  if (subreddit === '') {
    return (
      <div className="App">
        <SubredditSelector dispatch={dispatch} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <SubredditView {...state} dispatch={dispatch} />
      </div>
    );
  }
}

export default App;
