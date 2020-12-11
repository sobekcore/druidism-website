import Navbar from "../components/navbar";
import Title from "../components/title";
import Footer from "../components/footer";
import ImageGallery from 'react-image-gallery';

const images =
[
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export default function Gallery()
{
  return(
    <div id="gallery-page">
      <div className="background">
        <Navbar />
        <Title />
        <div className="post">
          <div className="gallery-title">Screenshots</div>
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            showIndex={true}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
