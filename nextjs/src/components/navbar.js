import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar()
{
  const router = useRouter();
  const mainClass = router.pathname == "/" ? "active" : "";
  const blogClass = (router.pathname == "/blog" || router.pathname == "/blog/[slug]") ? "active" : "";

  return(
    <nav className="navbar">
      <div className="shift">
        <ul>
          <li><Link href="/">
            <a className={mainClass}>Main</a>
          </Link></li>
          <li><Link href="/blog">
            <a className={blogClass}>Blog</a>
          </Link></li>
        </ul>
      </div>
      <div id="navbar-icons">
        <div class="icons-box">
          <ul>
            <li><a href="https://twitter.com/sobekcore"><img className="icon" src="twitter-icon.svg"/></a></li>
            <li><a><img className="icon" src="email-icon.svg"/></a></li>
            <li><a href="https://github.com/sobekcore"><img className="icon" src="github-icon.svg"/></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
