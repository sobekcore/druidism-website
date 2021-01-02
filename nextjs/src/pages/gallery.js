import Navbar from "../components/navbar";
import Title from "../components/title";
import Footer from "../components/footer";
import ImageGallery from "react-image-gallery";
import ImageList from "../components/image-list";
import Head from "next/head";

export default function Gallery()
{
  return(
    <div id="gallery-page">
      <Head>
        <title>Druidism - Gallery</title>
      </Head>
      <div className="background">
        <Navbar />
        <Title />
        <div className="post">
          <div className="gallery-title">
            Gallery <span role="img" aria-label="Image">📷</span>
          </div>
          <hr />
          <ImageGallery
            items={ImageList}
            showPlayButton={false}
            showIndex={true}
            slideDuration={600}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
