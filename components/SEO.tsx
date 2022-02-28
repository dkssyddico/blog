import Head from 'next/head';

type SEOProps = {
  title: string;
};

export default function SEO({ title }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
