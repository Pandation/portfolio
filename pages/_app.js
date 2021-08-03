import "../styles/globals.css";
import React from "react";
import Head from "next/head";

export const langageCtx = React.createContext();

function App({ Component, pageProps }) {
  const [state, setState] = React.useState("fr");
  return (
    <>
      <Head>
        <meta name="title" content="Florian Baumes's Portfolio" />
        <meta name="description" content="All my projects and skills!" />
        <link
          rel="image_src"
          href="https://florianbaumes.fr/images/portfolio.png"
        />
        <meta property="og:title" content="Florian Baumes" />
        <meta
          property="og:image"
          content="https://florianbaumes.fr/images/portfolio.png"
        />
        <meta property="og:description" content="Portfolio" />
        <meta property="og:url" content="https://florianbaumes.fr" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="Website" />
      </Head>
      <langageCtx.Provider value={[state, setState]}>
        <Component {...pageProps} />
      </langageCtx.Provider>
    </>
  );
}

export default App;
