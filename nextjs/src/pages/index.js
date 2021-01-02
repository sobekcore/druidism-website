import NavBar from "../components/navbar";
import ParallaxScrolling from "../components/parallax-scrolling";
import Title from "../components/title";
import Footer from "../components/footer";
import Features from "../components/features";
import ImageGallery from "react-image-gallery";

const Images =
[
  { original: "images/druidism-1.png" },
  { original: "images/druidism-7.png" },
  { original: "images/druidism-18.png" },
  { original: "images/druidism-8.png" },
  { original: "images/druidism-4.png" },
  { original: "images/druidism-2.png" }
];

export default function Index()
{
  return(
    <div>
      <div id="title-page">
        <ParallaxScrolling />
        <NavBar />
        <Title />
      </div>
      <div id="trailer-video">

        {/* Temporary gallery */}
        <div id="trailer-gallery">
          <ImageGallery
            items={Images}
            autoPlay={true}
            showNav={false}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
            slideDuration={800}
            slideInterval={5000}
          />
        </div>

      </div>
      <div id="section-waves-box">
        <img id="section-waves" src="section-waves.svg"/>
        <Features />
      </div>
      <Footer />
    </div>
  );
}
