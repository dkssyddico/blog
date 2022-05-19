import Head from 'next/head';
import { siteMetadata } from '../data/siteMetadata';

type SEOProps = {
  title: string;
};

export default function SEO({ title }: SEOProps) {
  const meta = {
    img: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
  };
  return (
    <Head>
      <meta name='robots' content='follow, index' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>{title}</title>
      <meta name='description' content='' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://example.com/page.html' />
      <meta property='og:title' content={title} />
      <meta property='og:image' content={meta.img} />
      <meta property='og:description' content={siteMetadata.description} />
      <meta property='og:site_name' content={siteMetadata.title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@site_account' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={siteMetadata.description} />
      <meta name='twitter:image' content={meta.img} />
      <link rel='canonical' href='' />
    </Head>
  );
}
