import LeftArrow from './LeftArrow.svg';
import RightArrow from './RightArrow.svg';
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'
import "./Gallery.css";
import { Carousel } from 'react-responsive-carousel';
import image from "./example.png";
import { useEffect } from 'react';

const slideImages = [
  'Test.png',
  'Test.png',
  'Test.png'
];
function Gallery({passColorNavbar}) {
    useEffect(() => {
        passColorNavbar("#FCFCFC");
    });


    return (
        <div className="GalleryContainer">

          <Carousel infiniteLoop autoPlay interval={4000} transitionTime= {1000} useKeyboardArrows showIndicators showThumbs={false} showStatus={false}>
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
    )
}

export default Gallery
