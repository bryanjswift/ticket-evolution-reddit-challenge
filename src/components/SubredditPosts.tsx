import React from 'react';
import { Post } from '../model/Post';

interface Props {
  posts: Post[];
}

/**
 * Show a "list" of posts from a subreddit.
 */
export function SubredditPosts(props: Props) {
  return (
    <div className="posts">
      {props.posts.map(post => <SubredditPost {...post} />)}
    </div>
  )
}

/**
 * Show an individual post from a subreddit.
 */
function SubredditPost(props: Post) {
  const { preview } = props;
  const { images } = preview;
  const [ image ] = images;
  return (
    <div className="post">
      <img
        alt=""
        src={image.source.url}
        height={image.source.height}
        width={image.source.width} />
    </div>
  );
}
