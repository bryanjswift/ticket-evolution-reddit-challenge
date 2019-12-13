import React, { Dispatch } from 'react';
import { Action } from '../Action';
import { AppState } from '../AppState';
import { SubredditPosts } from './SubredditPosts';

interface Props extends AppState {
  dispatch: Dispatch<Action>;
}

export function SubredditView(props: Props) {
  const { subreddit } = props;
  return (
    <>
      <h1>View Images from <code>/r/{subreddit}</code></h1>
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
