/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <link
            rel="icon"
            type="image/svg"
            href={require('../public/favicon.svg')}
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                body {
                  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont,
                    'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

                  -webkit-font-smoothing: antialiased;
	                -moz-osx-font-smoothing: grayscale;
                  line-height: 1.3;
                  background-color: #fff;
                  color: #333;
                  margin: 0;
                }

                *, :after, :before {
                  box-sizing: border-box;
                }
              `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
