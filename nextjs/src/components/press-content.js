import Title from "../components/title";
import Link from "next/link";

export default function PressContent()
{
  return(
  <>
    <div className="post">
      <div id="press-nav">
        <h1>Druidism</h1>
        <ul>
          <li><Link href="/media/#features">Features</Link></li>
          <li><Link href="/media/#videos">Videos</Link></li>
          <li><Link href="/media/#images">Images</Link></li>
          <li><Link href="/media/#logo">Logo</Link></li>
          <li><Link href="/media/#contact">Contact</Link></li>
        </ul>
      </div>
      <div id="press-factsheet">
        <h1>Factsheet</h1>
        <ul>
          <li>Developer: <br /><a href="https://twitter.com/sobekcore">Sobek</a></li>
          <li>Release date: <br />TBD</li>
          <li>Platforms: <br />Steam</li>
          <li>Website: <br />druidism.net</li>
          <li>Regular Price: <br />TBD</li>
        </ul>
      </div>
      <div id="press-content">
        <Title />
        <h1>Description</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis interdum turpis, non hendrerit felis.
        Suspendisse vulputate nibh eget lacus dapibus, non commodo enim porttitor. Sed feugiat volutpat elit sit
        amet mattis. Maecenas posuere pulvinar arcu nec commodo. Praesent pulvinar odio elit, eu euismod purus
        tincidunt vitae. Suspendisse tincidunt arcu a mi convallis fermentum. Cras tincidunt, diam viverra mollis
        ultrices, ligula mi tincidunt purus, id pellentesque ipsum erat non tellus.</p>
        <h1>History</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis interdum turpis, non hendrerit felis.
        Suspendisse vulputate nibh eget lacus dapibus, non commodo enim porttitor. Sed feugiat volutpat elit sit
        amet mattis. Maecenas posuere pulvinar arcu nec commodo. Praesent pulvinar odio elit, eu euismod purus
        tincidunt vitae. Suspendisse tincidunt arcu a mi convallis fermentum. Cras tincidunt, diam viverra mollis
        ultrices, ligula mi tincidunt purus, id pellentesque ipsum erat non tellus.</p>
        <div id="features"></div>
        <h1>Features</h1>
        <ul>
          <li>Reflective</li>
          <li>Forecast</li>
          <li>Collapse</li>
          <li>String</li>
          <li>Account</li>
          <li>Shiny</li>
          <li>Visitor</li>
          <li>Justify</li>
        </ul>
      </div>

      <div id="press-more-content">
        <div id="videos"></div>
        <h1>Videos</h1>
          <div id="press-big-image"><img src="https://unsplash.it/550/325"/></div>

        <hr />

        <div id="images"></div>
        <h1>Images</h1>
        <a href="/druidism-images.zip" download>
          <div className="press-download">download images as .zip (15MB)</div>
        </a>
        <div id="press-small-image">
          <a href="https://unsplash.it/1921/1080"><img src="https://unsplash.it/1921/1080"/></a>
          <a href="https://unsplash.it/1922/1080"><img src="https://unsplash.it/1922/1080"/></a>
          <img src="https://unsplash.it/1923/1080"/>
          <img src="https://unsplash.it/1919/1080"/>
          <img src="https://unsplash.it/1918/1080"/>
        </div>

        <hr />

        <div id="logo"></div>
        <h1>Logo</h1>
        <a href="/druidism-logos.zip" download>
          <div className="press-download">download logos as .zip (1MB)</div>
        </a>
        <div id="press-logo-box">
          <div id="press-icon">
            <a href="/big-icon.png"><img src="/big-icon.png"/></a>
          </div>
          <div id="press-logo">
            <a href="/main-logo.png"><img src="/main-logo.png"/></a>
          </div>
        </div>

        <hr />

        <div id="contact"></div>
        <h1>Contact</h1>
        <div id="press-contact">
          <ul>
            <li>Inquires: <br /><a href="mailto:sobekcore@gmail.com">sobekcore@gmail.com</a></li>
            <li>Twitter: <br /><a href="https://twitter.com/sobekcore">@SobekCore</a></li>
            <li>Website: <br />druidism.net</li>
          </ul>
        </div>
      </div>
    </div>
  </>
  );
}