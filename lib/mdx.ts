import { join } from 'path';
import { readFileSync, readdirSync } from 'fs';
import { bundleMDX } from 'mdx-bundler';

const root = process.cwd();

export const getAllSlugs = async () => {
  const postsPath = join(root, 'posts');
  const fileNames = readdirSync(postsPath);

  return fileNames;
};

export const getPostBySlug = async (slug: string) => {
  const mdxSource = readFileSync(join(root, 'posts', `${slug}.mdx`), 'utf-8');
};
