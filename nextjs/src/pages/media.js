import NavBar from "../components/navbar";
import PressContent from "../components/press-content";
import Footer from "../components/footer";

export default function Media()
{
  return(
    <div id="media-page">
      <div className="background">
        <NavBar />
        <PressContent />
        <Footer />
      </div>
    </div>
  );
}
