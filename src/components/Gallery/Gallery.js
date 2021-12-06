import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import "./Gallery.css";
import { Carousel } from "react-responsive-carousel";
import image from "./example.png";
import image2 from "./home-1.jpeg";
import image3 from "./home-2.jpeg";
import image4 from "./home-3.jpeg";
import { useEffect } from "react";

function Gallery({ passColorNavbar }) {
  useEffect(() => {
    passColorNavbar("#FCFCFC");
  });

  return (
    <div className="GalleryContainer">
      <Carousel
        infiniteLoop
        autoPlay
        interval={4000}
        transitionTime={1000}
        useKeyboardArrows
        showIndicators
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src={image2} />
        </div>
        <div>
          <img src={image} />
        </div>
        <div>
          <img src={image3} />
        </div>
        <div>
          <img src={image4} />
        </div>
      </Carousel>
    </div>
  );
}

export default Gallery;
