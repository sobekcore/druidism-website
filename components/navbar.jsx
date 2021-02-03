import SocialIcons from "./social-icons";
import NavbarItems from "./navbar-items";
import { useState } from "react";

export default function NavBar()
{
  const [toggleState, setToggleState] = useState("off");

  function Toggle()
  {
    setToggleState(toggleState === "off" ? "on" : "off");
  }

  return(
    <nav id="navbar">
      <div id="shift">
        <ul>
          <NavbarItems />
          <div id="hamburger-box">
            <li><a onClick={Toggle}>
              <img className={`switch ${toggleState}`} src="/hamburger-icon.svg"/>
            </a></li>
          </div>
        </ul>
      </div>
      <div id="navbar-icons">
        <SocialIcons />
      </div>
      <div className={toggleState == "on" ? "show-hamburger-nav" : null}>
        <div className={toggleState == "off" ? "hamburger-items" : null}>
          <ul>
            <NavbarItems />
          </ul>
        </div>
      </div>
    </nav>
  );
}
