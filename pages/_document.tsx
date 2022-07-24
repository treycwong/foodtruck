import { Html, Head, Main, NextScript } from "next/document";
import { Global } from "@emotion/react";
import { GlobalStyles } from "@/styles/global";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap"
        />
        <Global styles={GlobalStyles} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
