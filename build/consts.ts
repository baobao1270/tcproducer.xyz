import path from 'path';
import { fileURLToPath } from 'url';

export const PROJECT_ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
export const DATA_DIRECTORY = path.join(PROJECT_ROOT, 'data');
export const ARTICLE_DIRECTORY = path.join(DATA_DIRECTORY, 'articles');

export const REQUIRED_ICONS = [
  // Website Metadata in Social Links List
  'solid/envelope',
  'solid/circle-right',
  "solid/newspaper",

  // Artworks Metadata in Artworks List
  'solid/diagram-project',
  'solid/film',
  'solid/headphones',

  //Artwork Links
  'brands/youtube',
  'brands/bilibili',
  'solid/file-contract',
  'solid/file-audio',
  'solid/file-video',

  // Content
  'regular/circle-up',
  'solid/spinner',
]
