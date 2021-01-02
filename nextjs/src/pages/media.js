import NavBar from "../components/navbar";
import PressContent from "../components/press-content";
import Footer from "../components/footer";
import Head from "next/head";

export default function Media()
{
  return(
    <div id="media-page">
      <Head>
        <title>Druidism - Press Kit</title>
      </Head>
      <div className="background">
        <NavBar />
        <PressContent />
        <Footer />
      </div>
    </div>
  );
}
