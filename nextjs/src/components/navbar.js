import Link from "next/link";

export default function NavBar()
{
  return(
    <div className="navbar">
      <div className="nav-all">
        <Link href="/">
          <a className="nav-single">MAIN</a>
        </Link>
        <Link href="/blog">
          <a className="nav-single">BLOG</a>
        </Link>
      </div>
    </div>
  );
}
