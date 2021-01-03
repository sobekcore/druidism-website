import "../styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps })
{
  return(
    <>
      <Head>
        <title>Druidism</title>
        <link rel="icon" type="image/x-icon" href="/icon.png"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;