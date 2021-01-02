import Navbar from "../components/navbar";
import Title from "../components/title";
import Footer from "../components/footer";
import ImageGallery from "react-image-gallery";
import ImageList from "../components/image-list";

export default function Gallery()
{
  return(
    <div id="gallery-page">
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
