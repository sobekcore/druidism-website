import PostPagination from "../components/post-pagination";
import NavBar from "../components/navbar";
import Title from "../components/title"
import Footer from "../components/footer";
import Head from "next/head";

export default function Blog()
{
  return (
    <div id="blog-page">
      <Head>
        <title>Druidism - Blog</title>
      </Head>
      <div className="background">
        <NavBar />
        <Title />
        <PostPagination />
        <Footer />
      </div>
    </div>
  );
};
