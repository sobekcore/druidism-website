import PostPagination from "../components/post-pagination";
import NavBar from "../components/navbar";
import Title from "../components/title"
import Footer from "../components/footer";

export default function Blog()
{
  return (
    <div id="blog-page">
      <div className="background">
        <NavBar />
        <Title />
        <PostPagination />
        <Footer />
      </div>
    </div>
  );
};
