import NavBar from "../components/navbar";
import Title from "../components/title";
import Footer from "../components/footer";
import Head from "next/head";

export default function Media()
{
  return(
    <div id="contact-page">
      <Head>
        <title>Druidism - Contact</title>
      </Head>
      <div className="background">
        <NavBar />
        <Title />
        <div className="post">
        <div id="contact-mail">
          For any questions ask at: <a href="mailto:sobekcore@gmail.com" id="mail">sobekcore@gmail.com</a>
        </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
