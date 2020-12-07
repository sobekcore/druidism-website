import NavBar from "../components/navbar";
import Title from "../components/title";
import Footer from "../components/footer";

export default function About()
{
  return(
    <div id="about-page">
      <div className="background">
        <NavBar />
        <Title />
        <div className="post">
          <span id="about-header">
            Druidism is a story-based rpg game. Its made with pixel art with love by a single person.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem turpis, viverra id varius in,
            porttitor id lectus. Nullam maximus porta odio, ac elementum lacus pulvinar at. Donec eu libero odio.
            Vestibulum quis leo vulputate, sagittis nisl vitae, vehicula neque. Cras luctus porttitor laoreet.
            Nulla eu arcu pretium, ultrices odio et, aliquet purus. Nam egestas magna fermentum feugiat vehicula.
            Cras aliquet, massa quis bibendum luctus, eros ligula luctus nulla, ut commodo neque felis bibendum augue.
            Nam turpis quam, hendrerit ut sem vel, scelerisque pretium velit. Nulla facilisi.
          </span>
          <img className="about-image" src="https://unsplash.it/700/218"/>
          <div className="about-box">
            <p className="about-title">Shapeshift</p>
            <span className="about-description">
              Proin ut laoreet velit. Aenean bibendum velit vel elit vulputate aliquam. Pellentesque at justo augue.
              Donec lacinia, augue nec tempor commodo, sapien enim mollis tortor, blandit tristique leo augue id nulla.
              Sed id dapibus urna, in blandit neque. Nullam faucibus justo ac eros pellentesque, quis sagittis turpis sodales.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ligula mauris. Nam tincidunt, leo et semper
              efficitur, felis lacus sagittis ex, nec lacinia felis tellus ut justo. Nullam quam elit,
              interdum vel auctor tristique, semper sed velit. Morbi suscipit lobortis nibh quis finibus.
              In semper lectus sem, vel mattis sem aliquet facilisis. Morbi ultricies metus eu dui placerat consequat.
              Mauris ut facilisis elit. Curabitur ultricies arcu vel mauris condimentum sodales. Morbi semper,
              erat maximus rutrum consectetur, felis sapien egestas est, ac efficitur eros massa nec nulla.
            </span>
            <img className="about-image" src="https://unsplash.it/700/219"/>
          </div>
          <div className="about-box">
            <p className="about-title">Gather</p>
            <span className="about-description">
              Proin ut laoreet velit. Aenean bibendum velit vel elit vulputate aliquam. Pellentesque at justo augue.
              Donec lacinia, augue nec tempor commodo, sapien enim mollis tortor, blandit tristique leo augue id nulla.
              Sed id dapibus urna, in blandit neque. Nullam faucibus justo ac eros pellentesque, quis sagittis turpis sodales.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ligula mauris. Nam tincidunt, leo et semper
              efficitur, felis lacus sagittis ex, nec lacinia felis tellus ut justo. Nullam quam elit,
              interdum vel auctor tristique, semper sed velit. Morbi suscipit lobortis nibh quis finibus.
              In semper lectus sem, vel mattis sem aliquet facilisis. Morbi ultricies metus eu dui placerat consequat.
              Mauris ut facilisis elit. Curabitur ultricies arcu vel mauris condimentum sodales. Morbi semper,
              erat maximus rutrum consectetur, felis sapien egestas est, ac efficitur eros massa nec nulla.
            </span>
            <img className="about-image" src="https://unsplash.it/700/220"/>
          </div>
          <div className="about-box">
            <p className="about-title">Choose</p>
            <span className="about-description">
              Proin ut laoreet velit. Aenean bibendum velit vel elit vulputate aliquam. Pellentesque at justo augue.
              Donec lacinia, augue nec tempor commodo, sapien enim mollis tortor, blandit tristique leo augue id nulla.
              Sed id dapibus urna, in blandit neque. Nullam faucibus justo ac eros pellentesque, quis sagittis turpis sodales.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ligula mauris. Nam tincidunt, leo et semper
              efficitur, felis lacus sagittis ex, nec lacinia felis tellus ut justo. Nullam quam elit,
              interdum vel auctor tristique, semper sed velit. Morbi suscipit lobortis nibh quis finibus.
              In semper lectus sem, vel mattis sem aliquet facilisis. Morbi ultricies metus eu dui placerat consequat.
              Mauris ut facilisis elit. Curabitur ultricies arcu vel mauris condimentum sodales. Morbi semper,
              erat maximus rutrum consectetur, felis sapien egestas est, ac efficitur eros massa nec nulla.
            </span>
            <img className="about-image" src="https://unsplash.it/700/221"/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
