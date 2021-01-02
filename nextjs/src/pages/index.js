import NavBar from "../components/navbar";
import ParallaxScrolling from "../components/parallax-scrolling";
import Title from "../components/title";
import Footer from "../components/footer";
import ImageGallery from "react-image-gallery";

const Images =
[
  {
    original: "images/druidism-1.png"
  },
  {
    original: "images/druidism-7.png"
  },
  {
    original: "images/druidism-18.png"
  },
  {
    original: "images/druidism-8.png"
  },
  {
    original: "images/druidism-4.png"
  },
  {
    original: "images/druidism-2.png"
  }
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
            slideInterval={4500}
          />
        </div>

      </div>
      <div id="section-waves-box">
        <img id="section-waves" src="section-waves.svg"/>
        <div id="features-box">
          <div className="features">
            <div className="features-title">Shapeshift</div>
            <img src="shapeshift-image.png"/>
              <span>Change your stances as you will, many different playstyles with every shapeshift. Most certainly
                you will find something that fit you. Wolf, bee, bear and more!
              </span>
          </div>
          <div className="features">
          <div className="features-title">Gather</div>
            <img src="gather-image.png"/>
              <span>Like every druid you can gather a lot of stuff, either very usefull plants or your enemy corpses...
                Either way is good and can get you far if it goes with your philosophy.
              </span>
          </div>
          <div className="features">
            <div className="features-title">Choose</div>
            <img src="choose-image.png"/>
              <span>You have a lot of choices, starting from many diferent stances to dialogue options. Everything is under your
                control, you can play the way you feel.
              </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
