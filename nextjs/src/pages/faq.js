import NavBar from "../components/navbar";
import Title from "../components/title";
import Footer from "../components/footer";

export default function Faq()
{
  return(
    <div id="faq-page">
      <div className="background">
        <NavBar />
        <Title />
        <div className="post">
          <h3>What is Druidism?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed mollis scelerisque leo sit amet ultricies. Phasellus accumsan vel erat a hendrerit.
          Donec maximus tellus sit amet elit maximus lobortis. Vestibulum nec ex velit.</p>
          <h3>Who made it?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed mollis scelerisque leo sit amet ultricies. Phasellus accumsan vel erat a hendrerit.
          Donec maximus tellus sit amet elit maximus lobortis. Vestibulum nec ex velit.</p>
          <h3>How its made?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed mollis scelerisque leo sit amet ultricies. Phasellus accumsan vel erat a hendrerit.
          Donec maximus tellus sit amet elit maximus lobortis. Vestibulum nec ex velit.</p>
          <h3>What platforms is Druidism available on?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed mollis scelerisque leo sit amet ultricies. Phasellus accumsan vel erat a hendrerit.
          Donec maximus tellus sit amet elit maximus lobortis. Vestibulum nec ex velit.</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
