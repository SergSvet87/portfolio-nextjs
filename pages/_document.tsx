import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta
          name="description"
          content="Application with my portfolio on Next.js"
        />
        <meta name="author" content="Serhii Svitlychnyi" />
        <meta
          name="keywords"
          content="html, css, javascript, react, next.js, frontend, portfolio, about, contact,  svitlychnyi, serhii"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
