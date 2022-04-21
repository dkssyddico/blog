import Image from 'next/image';
import Container from '../components/Container';
import PostCard from '../components/PostCard';
import { getAllFilesFrontMatter } from '../lib/mdx';
import { PostsProps } from '../lib/types';

const Home = ({ posts }: PostsProps) => {
  return (
    <Container>
      <div>
        <section className='mt-6 mb-20 flex items-center justify-between'>
          <div>
            <p className='font-bold text-teal-400'>Hi, my name is</p>
            <p className='my-2 text-4xl font-extrabold text-slate-200'>Hyemin Chae</p>
            <p className='text-2xl font-extrabold text-slate-400'>Frontend Developer</p>
            <p className='my-2 text-lg font-extrabold text-slate-400'>
              who believes "Done is better than perfect"
            </p>
          </div>
          <div className='animate-bounce'>
            <Image alt='hyemin chae' src='/logo.png' height={176} width={176} />
          </div>
        </section>
        <section>
          <h3 className='mb-8 text-4xl font-extrabold text-slate-200'>Recent Posts</h3>
          <div>
            {posts.slice(0, 3).map((post, index) => (
              <PostCard
                key={index}
                title={post.frontMatter.title}
                description={post.frontMatter.description}
                slug={post.slug}
                date={post.frontMatter.date}
                tags={post.frontMatter.tags}
              />
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Home;

export const getStaticProps = () => {
  const posts = getAllFilesFrontMatter();
  return {
    props: {
      posts,
    },
  };
};
