import Link from "next/link";
import { useRouter } from "next/router";

export default function NavbarItems()
{
  const router = useRouter();
  const mainClass = router.pathname == "/" ? "active" : "";
  const blogClass = (router.pathname == "/blog" || router.pathname == "/blog/[slug]") ? "active" : "";
  const galleryClass = router.pathname == "/gallery" ? "active" : "";
  const faqClass = router.pathname == "/faq" ? "active" : "";
  const mediaClass = router.pathname == "/media" ? "active" : "";

  return(
  <>
    <li><Link href="/">
      <a className={mainClass}>Main</a>
    </Link></li>
    <li><Link href="/blog">
      <a className={blogClass}>Blog</a>
    </Link></li>
    <li><Link href="/gallery">
      <a className={galleryClass}>Gallery</a>
    </Link></li>
    <li><Link href="/faq">
      <a className={faqClass}>FAQ</a>
    </Link></li>
    <li><Link href="/media">
      <a className={mediaClass}>Media</a>
    </Link></li>
  </>
  );
}
