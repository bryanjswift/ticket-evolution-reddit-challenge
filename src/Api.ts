import { Post } from './model/Post';

interface FetchOptions {
  /** Name of the subreddit. */
  name: string;
}

interface PostsResponseListItem {
  kind: string;
  data: Post;
}

interface PostsResponseData {
  modhash: string;
  dist: number;
  children: PostsResponseListItem[];
}

interface PostsResponse {
  kind: string;
  data: PostsResponseData;
}

/**
 * Fetch posts from reddit "api".
 */
export async function fetchPosts(options: FetchOptions): Promise<Post[]> {
  const response = await fetch(getSubredditUri(options));
  if (!response.ok) {
    throw new Error(`Unable to get posts for /r/${options.name}.`);
  }
  const responseData: PostsResponse = await response.json();
  if (responseData.kind !== 'Listing') {
    throw new Error(`/r/${options.name} did not provide a Listing.`);
  }
  return responseData.data.children.map(item => item.data).filter(post => post.post_hint === 'image');
}

function getSubredditUri(options: FetchOptions) {
  return `https://www.reddit.com/r/${options.name}.json`;
}
