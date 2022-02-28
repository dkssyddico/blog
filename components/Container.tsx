import Footer from './Footer';
import Navbar from './Navbar';
import SEO from './SEO';

export default function Container(props) {
  const { children, ...customMeta } = props;
  const meta = {
    title: 'Hyemin Chae',
    ...customMeta,
  };
  return (
    <div className='bg-gray-900'>
      <SEO title={meta.title} />
      <Navbar />
      <main className='mx-auto min-h-screen max-w-3xl py-4'>{children}</main>
      <Footer />
    </div>
  );
}
