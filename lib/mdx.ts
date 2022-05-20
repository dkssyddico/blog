import { useMemo } from 'react';
import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypeCitation from 'rehype-citation';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypePresetMinify from 'rehype-preset-minify';
import rehypeCodeTitles from 'rehype-code-titles';

export const getAllBlogPath = () => {
  const files = fs.readdirSync(path.join('data', 'blog'));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return paths;
};

export const getMDXfileBySlug = async (slug) => {
  const source = fs.readFileSync(path.join('data', 'blog', slug + '.mdx'), 'utf-8');
  const { code, frontmatter } = await bundleMDX({
    source,
    xdmOptions(options, frontMatter) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeKatex,
        rehypeCodeTitles,
        rehypeCitation,
        [rehypePrismPlus, { ignoreMissing: true }],
        rehypePresetMinify,
      ];
      return options;
    },
  });
  return {
    code,
    frontmatter,
  };
};

export const getAllFilesFrontMatter = () => {
  const files = fs.readdirSync(path.join('data', 'blog'));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('data', 'blog', filename), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split('.')[0],
    };
  });
  return posts;
};
