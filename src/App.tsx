import React, { useReducer } from 'react';
import { SubredditSelector } from './components/SubredditSelector';
import { INITIAL_STATE, reducer } from './AppState';
import './App.css';

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
