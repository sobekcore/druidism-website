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
            <p>Druidism is a story based RPG made with pixel art. In this game you can choose between
            various different playstyles and story branching to play the way you feel.</p>
          <h3>How its made?</h3>
            <p>The game is made in GMS2, the engine fits my needs and making my own would be overkill mainly
            because of the time it would take to make it. All pixel art was done in Paint.net. Sound is done in Audacity,
            and music is done in Cakewalk.</p>
          <h3>Who made it?</h3>
            <p>It is currently made by a single person - me. Im Sobek, a 20yo front-end / game developer (or more like a
            wannabe actually). Even tho the game and a website are not perfect, i believe they are good enough to be
            decently playable at least. And for alot of people they might consider it even good.</p>
          <h3>Will i like the game?</h3>
            <p>If you like RPGs, especially pixel art one's, there's a huge chance u may like it. If you like games like
            Undertale, Stardew Valley or Terraria, you may like Druidism.</p>
          <h3>When the game will be made?</h3>
            <p>It is currently in the making by one person, which can take some time. It should be out around 2021/2022.
            Please be patient.</p>
          <h3>What platforms will Druidism be available on?</h3>
            <p>For now Druidism will only be avaiable on steam, but in the future maybe the group will expand, who knows
            ¯\_(ツ)_/¯</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
