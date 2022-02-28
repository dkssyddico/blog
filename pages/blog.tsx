import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../components/Container';
import React, { useState } from 'react';
import PostCard from '../components/PostCard';

export default function Blog({ posts }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const filteredPosts = posts.filter((post) =>
    post.frontMatter.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(posts);

  return (
    <Container title='Blog | dkssyddico'>
      <div className='mt-2'>
        <h1 className='mb-10 text-4xl font-extrabold text-slate-200'>All Posts</h1>
        <div className='my-10'>
          <input
            className='block w-full rounded-md bg-slate-700 px-4 py-2 text-slate-200 outline-none focus:ring-2 focus:ring-teal-400'
            placeholder='Search articles'
            onChange={handleTermChange}
            type='text'
          />
        </div>
        <section>
          {!searchTerm &&
            posts.map((post, index) => (
              <PostCard
                key={index}
                title={post.frontMatter.title}
                description={post.frontMatter.description}
                slug={post.slug}
                date={post.frontMatter.date}
                tags={post.frontMatter.tags}
              />
            ))}
          {!filteredPosts.length && <p className='text-slate-200'>No posts found.</p>}
          {searchTerm &&
            filteredPosts.map((post, index) => (
              <PostCard
                key={index}
                title={post.frontMatter.title}
                description={post.frontMatter.description}
                slug={post.slug}
                date={post.frontMatter.date}
                tags={post.frontMatter.tags}
              />
            ))}
        </section>
      </div>
    </Container>
  );
}
export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('data', 'blog'));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('data', 'blog', filename), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split('.')[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
