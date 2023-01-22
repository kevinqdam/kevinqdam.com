import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    /**
     * The reading time in minutes as a human-friendly string
     * @example "3 min read"
     */
    const readingTime = getReadingTime(textOnPage);
    data.astro.frontmatter.estReadTimeMinutes = readingTime.text;
  };
}
