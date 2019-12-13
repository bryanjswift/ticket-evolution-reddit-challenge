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
  const { num_comments, permalink, thumbnail, ups } = props;
  const link = `https://reddit.com${permalink}`;
  return (
    <div className="SubredditPost">
      <p>
        <a href={link}>
          <img
            alt=""
            src={thumbnail}
          />
        </a>
      </p>
      <p className="SubredditPost-data">
        <span className="SubredditPost-numComments">Comments: {num_comments}</span>
        <span className="SubredditPost-upvotes">Upvotes: {ups}</span>
      </p>
    </div>
  );
}
