import { getImage } from 'astro:assets';
import profileImage from '../assets/images/kevinqdam.png';

export type AuthorProfileImage = {
  alt: string;
  src: string;
};

const knownAuthorProfileImages = new Map<string, typeof profileImage>([
  ['/images/kevinqdam.png', profileImage],
]);

export const resolveAuthorProfileImage = async (
  image: AuthorProfileImage | undefined
): Promise<AuthorProfileImage | undefined> => {
  if (!image) {
    return undefined;
  }

  const knownImage = knownAuthorProfileImages.get(image.src);
  if (!knownImage) {
    return image;
  }

  const optimizedImage = await getImage({
    src: knownImage,
    width: 104,
    height: 104,
    fit: 'cover',
    format: 'webp',
  });

  return { ...image, src: optimizedImage.src };
};
