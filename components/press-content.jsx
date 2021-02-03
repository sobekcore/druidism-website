import Title from "./title";
import Link from "next/link";

export default function PressContent()
{
  return(
  <>
    <div className="post">
      <div id="press-nav">
        <h2>Druidism</h2>
        <ul>
          <li><Link href="/media/#features">Features</Link></li>
          <li><Link href="/media/#videos">Videos</Link></li>
          <li><Link href="/media/#images">Images</Link></li>
          <li><Link href="/media/#logo">Logo</Link></li>
          <li><Link href="/media/#contact">Contact</Link></li>
        </ul>
      </div>
      <div id="press-factsheet">
        <h2>Factsheet</h2>
        <ul>
          <li>Developer: <br /><a href="https://twitter.com/sobekcore">Sobek</a></li>
          <li>Release date: <br />TBD</li>
          <li>Platforms: <br /><a href="/steam">Steam</a></li>
          <li>Regular Price: <br />TBD</li>
        </ul>
      </div>
      <div id="press-content">
        <Title />
        <h2>Description</h2>
        <p>Druidism is a story based RPG made with pixel art. You are fresh baked druid which can choose the way he wants
          to live. You can choose what your character should be like, choose your aspects, choose your stances, and choose
          how the plot will go.
        </p>
        <h2>History</h2>
        <p>Work on Druidism started in early 2020, it is currently in developement process by Sobek, the one and only
          developer working on a game. He had only programming background, and had to taught himself other skill necesary
          to make the game. It will be completed around 2021-2022, and firstly avaiable on PC.
        </p>
        <div id="features"></div>
        <h2>Features</h2>
        <ul>
          <li>Shapeshift into many diferent forms and stances.</li>
          <li>Gather resources in the way you want.</li>
          <li>Cute hand-made pixel art graphics.</li>
          <li>Big precrafted world to explore.</li>
          <li>A lot of dialogue options to choose from.</li>
          <li>Fight terrifying enemies.</li>
          <li>Choose the playstyle of your own!</li>
        </ul>
      </div>

      <div id="press-more-content">
        <div id="videos"></div>
        <h2>Videos</h2>
          <h3>Soon™</h3>

        <hr />

        <div id="images"></div>
        <h2>Images</h2>
        <a href="/druidism-images.zip" download>
          <div className="press-download">download images as .zip (500KB)</div>
        </a>
        <div id="press-small-image">
          <a href="images/druidism-1.png"><img src="images/druidism-1.png"/></a>
          <a href="images/druidism-7.png"><img src="images/druidism-7.png"/></a>
          <a href="images/druidism-18.png"><img src="images/druidism-18.png"/></a>
          <a href="images/druidism-8.png"><img src="images/druidism-8.png"/></a>
          <a href="images/druidism-4.png"><img src="images/druidism-4.png"/></a>
          <a href="images/druidism-2.png"><img src="images/druidism-2.png"/></a>
        </div>

        <hr />

        <div id="logo"></div>
        <h2>Logo</h2>
        <a href="/druidism-logos.zip" download>
          <div className="press-download">download logos as .zip (4KB)</div>
        </a>
        <div id="press-logo-box">
          <div id="press-icon">
            <a href="/icon.png"><img src="/icon.png"/></a>
          </div>
          <div id="press-logo">
            <a href="/main-logo.png"><img src="/main-logo.png"/></a>
          </div>
        </div>

        <hr />

        <div id="contact"></div>
        <h2>Contact</h2>
        <div id="press-contact">
          <ul>
            <li>Inquires: <br /><a href="mailto:sobekcore@gmail.com">sobekcore@gmail.com</a></li>
            <li>Twitter: <br /><a href="https://twitter.com/sobekcore">@SobekCore</a></li>
          </ul>
        </div>
      </div>
    </div>
  </>
  );
}
