import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function Media()
{
  return(
    <div id="steam-page">
      <div className="background">
        <NavBar />
        <div className="post">
          <div className="loading">Available on steam soon!</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
