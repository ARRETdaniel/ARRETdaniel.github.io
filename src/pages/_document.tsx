import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Daniel Terra Gomes - Academic and Professional Portfolio" />
        <meta name="keywords" content="Computer Science, Autonomous Vehicles, Data Science, Machine Learning, Portfolio" />
        <meta name="author" content="Daniel Terra Gomes" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
