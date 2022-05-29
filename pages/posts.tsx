import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import PostCard from '../components/PostCard';
import TagZone from '../components/TagZone';
import { getAllFilesFrontMatter } from '../lib/mdx';
import { PostsProps } from '../lib/types';

export default function Posts({ posts, tags }: PostsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [tagClicked, setTagClicked] = useState('');
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a]);

  const handleTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleTagClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (searchTerm) setSearchTerm('');
    const button: HTMLButtonElement = event.currentTarget;
    setTagClicked(button.name);
  };

  const filteredPosts = posts.filter((post) => {
    if (searchTerm) {
      return post.frontMatter.title.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (tagClicked) {
      if (tagClicked === 'All') return post;
      return post.frontMatter.tags.includes(tagClicked);
    }
  });

  useEffect(() => {
    if (searchTerm) {
      setTagClicked('');
    }
  }, [searchTerm, tagClicked]);

  return (
    <Container title="Posts | Hyemin's blog">
      <div className='mt-2'>
        <h1 className='mb-10 text-4xl font-extrabold text-slate-200'>All Posts</h1>
        <div className='my-5'>
          <input
            className='block w-full rounded-md bg-slate-700 px-4 py-2 text-slate-200 outline-none focus:ring-2 focus:ring-teal-400'
            placeholder='Search articles'
            onChange={handleTermChange}
            type='text'
          />
        </div>
        <TagZone tags={sortedTags} handleTagClick={handleTagClick} tagClicked={tagClicked} />
        <section>
          {!searchTerm &&
            !tagClicked &&
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
          {!tagClicked &&
            searchTerm &&
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
          {!searchTerm &&
            tagClicked &&
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
          {searchTerm && !filteredPosts.length && <p className='text-slate-200'>No posts found.</p>}
        </section>
      </div>
    </Container>
  );
}

export const getStaticProps = () => {
  const posts = getAllFilesFrontMatter()
    .filter((post) => !post.frontMatter.isDraft)
    .sort((a, b) => Number(new Date(b.frontMatter.date)) - Number(new Date(a.frontMatter.date)));
  const tags = posts.reduce((a, b) => [...a, ...b.frontMatter.tags], []);
  const sortedTags = { All: posts.length };

  tags.forEach((tag) => {
    if (tag in sortedTags) {
      sortedTags[tag] += 1;
    } else {
      sortedTags[tag] = 1;
    }
  });

  return {
    props: {
      posts,
      tags: sortedTags,
    },
  };
};
