type ImageId = string;

type PostType = 'image';

export interface Post {
  id: string;
  post_hint: PostType;
  preview: PostPreview;
  ups: number;
  permalink: string;
}

interface PostPreview {
  images: Image[];
}

/**
 *
 */
interface Image {
  id: ImageId;
  source: ImageAsset;
  resolutions: ImageAsset[];
}

interface ImageAsset {
  url: string;
  width: number;
  height: number;
}