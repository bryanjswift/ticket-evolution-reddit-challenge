/**
 * Type alias for an id associated with a `Post`.
 */
type PostId = string;

/**
 * Type alias for the id associated with `Image`.
 */
type ImageId = string;

/**
 * Value union for `post_hint` used in the `Post` interface. Returned by the
 * Reddit API.
 */
type PostType = 'image' | string;

/**
 * Necessary data from the Reddit API to render and filter posts.
 *
 * Inferred based on https://www.reddit.com/r/${subreddit}.json where
 * `subreddit` is `"pics"` or `"programming"`.
 */
export interface Post {
  /** Identifier for the Reddit post. */
  id: PostId;
  /** A hint indicating probable type for the Reddit post. */
  post_hint: PostType;
  /** Information about previewing the post. */
  preview: PostPreview;
  /** The number of upvotes the post has received. */
  ups: number;
  /** Permalink to the post on reddit.com */
  permalink: string;
  /** Name of the subreddit to which the post belongs. */
  subreddit: string;
  /** Thumbnail for the post. */
  thumbnail: string;
}

/**
 * Data required to show a preview for an 'image' `PostType`.
 */
interface PostPreview {
  images: Image[];
}

/**
 * API data about a collection of image assets.
 */
interface Image {
  /** Identifier for the image. */
  id: ImageId;
  /** `ImageAsset` representing the "source" or "original" image. */
  source: ImageAsset;
  /** `ImageAsset` instances representing the `source` at different sizes. */
  resolutions: ImageAsset[];
}

/**
 * API data about an image asset which can be displayed.
 */
interface ImageAsset {
  url: string;
  width: number;
  height: number;
}
