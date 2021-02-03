// Importing CSS's
import "../styles/index.css";
import "../styles/blog.css";
import "../styles/slug.css";
import "../styles/gallery.css";
import "../styles/faq.css";
import "../styles/media.css";
import "../styles/contact.css";
import "../styles/steam.css";

import Head from "next/head";

function MyApp({ Component, pageProps })
{
  return(
    <>
      <Head>
        <title>Druidism</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <meta name="description" content="A story-based pixel art RPG made by a single person. Play the way you want and
        live a druid life. Shapeshift into many different aspects, gather plants, and choose you destiny."/>
        <meta name="keywords" content="rpg, indie, druid, druidism, pixel art, gathering, gather, story based"/>
        <meta name="robots" content="index,follow"/>
        <meta property="og:title" content="Druidism"/>
        <meta property="og:description" content="Story-based pixel art RPG made by a single person."/>
        <meta property="og:image" content="/images/druidism-1.png"/>
        <meta property="og:url" content="https://druidism.net"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;