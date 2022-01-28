import Document, { Html, Head, Main, NextScript } from 'next/document';

const age = new Date().getYear() - new Date('Sunday, January 5, 2005').getYear();

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const meta = {
      title: 'Aiden Bai',
      description: `${age} y/o student from Washington State interested in research and open source.`,
      image: '/favicon.png',
    };

    return (
      <Html lang="en">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
          <meta property="og:site_name" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@aidenybai" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <link rel="icon" type="image/png" href={meta.image} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
