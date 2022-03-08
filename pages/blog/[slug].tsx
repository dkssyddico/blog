import Container from '../../components/Container';
import { getAllBlogPath, getMDXfileBySlug } from '../../lib/mdx';
import { MDXLayoutRenderer } from '../../components/MDXcomponent';

const PostPage = ({ code, frontmatter: { title, date } }) => {
  return (
    <Container title={title}>
      <div className='mb-8'>
        <h1 className='mb-8 text-4xl font-extrabold text-slate-200'>{title}</h1>
        <p className='text-slate-300'>{date}</p>
      </div>
      <section className='prose mb-10 max-w-none'>
        <MDXLayoutRenderer code={code} />
      </section>
    </Container>
  );
};

export default PostPage;

export const getStaticPaths = () => {
  const paths = getAllBlogPath();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const { code, frontmatter } = await getMDXfileBySlug(slug);

  return {
    props: {
      code,
      frontmatter,
    },
  };
};
