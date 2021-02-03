import { useState, useEffect } from "react";

export default function ParallaxScrolling()
{
  const [scroll, setScroll] = useState(0);

  useEffect(() =>
  {
    let loaded = true;
    document.addEventListener("scroll", () =>
    {
      const scrollCheck = window.scrollY;

      if(loaded)
      {
        if(scrollY <= 800)
        {
          if(scrollCheck !== scroll)
          {
            setScroll(scrollCheck);
          }
        }
        else
        {
          setScroll(0);
        }
      }
    });

    return () => loaded = false;

  }, []);

  return(
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
  );
}
