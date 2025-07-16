import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="Daniel Terra Gomes - Academic and Professional Portfolio" />
          <meta name="keywords" content="Computer Science, Autonomous Vehicles, Data Science, Machine Learning, Portfolio" />
          <meta name="author" content="Daniel Terra Gomes" />
          <link rel="icon" href="/favicon.svg" />
        </Head>        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
