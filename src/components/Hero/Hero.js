
import "./Hero.css";
import { Carousel } from 'react-responsive-carousel';
import image from "./hero-background.png";
import RightArrow from "../RightArrow/RightArrow";
import $ from "jquery";


function Hero() {
  var styles = {
    bmBurgerBars: {
      background: "#FCFCFC",
    }

  }
  $(document).ready(function () {

    $(".down-arrow").click(function () {
      $('html, body').animate({
        scrollTop: $( window ).height()
      }, 1000);
    });
    });

  return (
    <div styles={styles} className="HeroContainer">
      <div id="carousel-container">
        <Carousel infiniteLoop autoPlay interval={4000} transitionTime={1000} useKeyboardArrows showArrows={false} showIndicators showThumbs={false} renderIndicator={false} showStatus={false}>
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

      <div className="arrows-hero">
          
            <button className ="down-arrow">
              
              <RightArrow color={"#ffffff"}/>

            </button>
          </div>
    </div>
  );
}

export default Hero;
