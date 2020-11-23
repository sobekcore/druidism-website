import NavBar from "../components/navbar";
import { useState, useEffect } from "react";

export default function Index()
{
  const [scroll, setScroll] = useState(0);

  useEffect(() =>
  {
    document.addEventListener("scroll", () =>
    {
      const scrollCheck = window.scrollY;

      if(scroll <= 800)
      {
        if(scrollCheck !== scroll)
        {
          setScroll(scrollCheck)
        }
      }
    });
  });

  return(
    <div>
      <div id="title-page">
        <div>
          <div id="background1-box">
            <img id="background1" src="home-background/sky.png"/>
          </div>
          <div id="background2-box">
            <img style={scroll ? {'paddingTop': `${scrollY / 2}px`} : {'paddingTop': 'none'}}
            id="background2" src="home-background/mountains.png"/>
          </div>
          <div id="background3-box">
            <img style={scroll ? {'paddingTop': `${scrollY / 2.8}px`} : {'paddingTop': 'none'}}
            id="background3" src="home-background/third-layer.png"/>
          </div>
          <div id="background4-box">
            <img style={scroll ? {'paddingTop': `${scrollY / 5}px`} : {'paddingTop': 'none'}}
            id="background4" src="home-background/second-layer.png"/>
          </div>
          <div id="background5"></div>
        </div>
        <NavBar />
        <div id="main-title">
          <img src="main-logo.png"/>
        </div>
      </div>
      <div id="trailer-video">
        <img src=""/>
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
      <div id="footer">
        <div id="created-by">Druidism | Created by <a href="https://twitter.com/sobekcore">Sobek</a></div>
        <hr />
        <div className="icons-box">
          <ul>
            <li><a href="https://twitter.com/sobekcore"><img className="icon" src="twitter-icon.svg"/></a></li>
            <li><a><img className="icon" src="email-icon.svg"/></a></li>
            <li><a href="https://github.com/sobekcore"><img className="icon" src="github-icon.svg"/></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
