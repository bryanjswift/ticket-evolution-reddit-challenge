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
      {props.posts.map(post => <SubredditPost key={post.id} {...post} />)}
    </div>
  )
}

/**
 * Show an individual post from a subreddit.
 */
function SubredditPost(props: Post) {
  const { permalink, thumbnail } = props;
  const link = `https://reddit.com${permalink}`;
  return (
    <div className="post">
      <a href={link}>
        <img
          alt=""
          src={thumbnail}
        />
      </a>
    </div>
  );
}
