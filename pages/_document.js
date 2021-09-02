/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* font awesome */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          {/* fonts google */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;700&family=Roboto:wght@300;400;500;700&family=Ubuntu+Mono:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body className="bg-white dark:bg-black-111">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
