import Link from "next/link";
import { useRouter } from "next/router";
import SocialIcons from "./social-icons";

export default function NavBar()
{
  const router = useRouter();
  const mainClass = router.pathname == "/" ? "active" : "";
  const blogClass = (router.pathname == "/blog" || router.pathname == "/blog/[slug]") ? "active" : "";

  return(
    <nav id="navbar">
      <div id="shift">
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
        <SocialIcons />
      </div>
    </nav>
  );
}
