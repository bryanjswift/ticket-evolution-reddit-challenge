import React, { ChangeEvent, Dispatch } from 'react';
import { Action } from '../Action';
import { AppState } from '../AppState';
import { SubredditPosts } from './SubredditPosts';

interface Props extends AppState {
  dispatch: Dispatch<Action>;
}

export function SubredditView(props: Props) {
  const { dispatch, subreddit } = props;
  function updateSort(e: ChangeEvent<HTMLSelectElement>) {
    if (e.target === null) {
      return;
    }
    const value = e.target.value;
    dispatch({ type: 'UpdateSort', order: value });
  }
  return (
    <>
      <h1>Viewing Images from <code>/r/{subreddit}</code></h1>
      <label>
        <span>Order by:</span>
        <select onChange={updateSort}>
          <option value="default">Default</option>
          <option value="popularity">Popularity</option>
          <option value="date">Post Date (Recent First)</option>
        </select>
      </label>
      <View {...props} />
    </>
  );
}

function Loading() {
  return (<p>Loading...</p>);
}

function View(props: AppState) {
  const { errors, isLoading, sortedPosts: posts } = props;
  if (isLoading) {
    return (<Loading />);
  } else if (posts.length === 0) {
    return (<p>No posts found.</p>);
  } else if (errors.length > 0) {
    return (
      <>
        <h2>Errors loading data</h2>
        {errors.map(e => (<p key={e}>{e}</p>))}
      </>
    );
  } else {
    return (<SubredditPosts posts={posts} />);
  }
}
