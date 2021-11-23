
import "./Hero.css";
import { Carousel } from 'react-responsive-carousel';
import image from "./hero-background.png";

function Hero() {
  var styles = {
    bmBurgerBars: {
      background: "#FCFCFC",
    }
  }
  return (
    <div styles={styles} className="HeroContainer">
      <div id="carousel-container">
        <Carousel infiniteLoop autoPlay interval={4000} transitionTime={1000} useKeyboardArrows showIndicators showThumbs={false} renderIndicator={false} showStatus={false}>
          <div>
            <img src={image} />
          </div>
          <div>
            <img src={image} />
          </div>
          <div>
            <img src={image} />
          </div>
        </Carousel>
      </div>
      <div id="title-container">
        <h1>Casa da <br /> Ti'Alzira</h1>
      </div>
    </div>
  );
}

export default Hero;
