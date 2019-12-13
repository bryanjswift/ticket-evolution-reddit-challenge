import React, { useReducer } from 'react';
import { SubredditSelector } from './components/SubredditSelector';
import { SubredditView } from './components/SubredditView';
import { INITIAL_STATE, reducer } from './AppState';
import './App.css';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { subreddit } = state;
  console.log(state);
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
