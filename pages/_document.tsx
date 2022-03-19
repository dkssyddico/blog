import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='ko'>
      <Head>
        <link href='/static/favicon.ico' rel='shortcut icon' />
        <link href='/static/favicons/logo-32x32.png' rel='icon' sizes='32x32' type='image/png' />
        <link href='/static/favicons/logo-16x16.png' rel='icon' sizes='16x16' type='image/png' />
        <link href='/static/favicons/logo.png' rel='apple-touch-icon' sizes='180x180' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
