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
  const { isLoading, posts } = props;
  if (isLoading) {
    return (<Loading />);
  } else {
    return (<SubredditPosts posts={posts} />);
  }
}
