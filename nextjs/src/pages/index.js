import NavBar from "../components/navbar";
import ParallaxScrolling from "../components/parallax-scrolling";
import Title from "../components/title";
import Footer from "../components/footer";

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
        <img src="video.png"/>
      </div>
      <div id="section-waves-box">
        <img id="section-waves" src="section-waves.svg"/>
        <div id="features-box">
          <div className="features">
            <div className="features-title">Shapeshift</div>
            <img src="https://unsplash.it/329/250"/>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
              suscipit bibendum aliquam.Ut aliquam venenatis ex. Nunc porttitor nunc vehicula velit euismod,
              eget dictum libero iaculis.</span>
          </div>
          <div className="features">
          <div className="features-title">Gather</div>
            <img src="https://unsplash.it/330/250"/>
              <span>Sed erat ligula, rutrum ut interdum vitae, tincidunt ac arcu. Curabitur
              interdum eros justo, sed rutrum purus placerat sit amet. Cras libero est, ullamcorper non risus eget,
              dignissim molestie ipsum.</span>
          </div>
          <div className="features">
            <div className="features-title">Choose</div>
            <img src="https://unsplash.it/331/250"/>
              <span>Phasellus id enim tincidunt, lobortis mi eu, accumsan ipsum. Mauris rutrum finibus tempor.
              Donec et orci eget augue tristique tristique sit amet id felis. Proin vestibulum dictum ante,
              vel auctor nunc suscipit quis.</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
