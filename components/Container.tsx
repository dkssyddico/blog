import { siteMetadata } from '../data/siteMetadata';
import { ContainerProps } from '../lib/types';
import Footer from './Footer';
import Navbar from './Navbar';
import SEO from './SEO';

export default function Container(props: ContainerProps) {
  const { children, ...customMeta } = props;
  const meta = {
    title: siteMetadata.title,
    ...customMeta,
  };
  return (
    <div className='bg-gray-900'>
      <SEO title={meta.title} />
      <Navbar />
      <main className='mx-auto min-h-screen max-w-4xl px-8 py-4'>{children}</main>
      <Footer />
    </div>
  );
}
