import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const root = process.cwd();

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(root, 'content', `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug, frontMatter: data, content };
}

export async function getAllPosts() {
  const files = fs.readdirSync(path.join(root, 'content'));

  return files.reduce((allPosts: any, postSlug: string) => {
    const source = fs.readFileSync(path.join(root, 'content', postSlug), 'utf8');
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
  }, []);
}