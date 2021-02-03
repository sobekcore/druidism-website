import NavBar from "../components/navbar";
import Title from "../components/title";
import Footer from "../components/footer";
import FaqContent from "../components/faq-content";
import Head from "next/head";

export default function Faq()
{
  return(
    <div id="faq-page">
      <Head>
        <title>Druidism - FAQ</title>
      </Head>
      <div className="background">
        <NavBar />
        <Title />
        <div className="post">
          <FaqContent />
        </div>
        <Footer />
      </div>
    </div>
  );
}
