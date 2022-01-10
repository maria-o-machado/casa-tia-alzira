import "./Hero.css";
import { Carousel } from "react-responsive-carousel";
import image from "./hero-background.png";
import image2 from "./photo-1.jpeg";
import image3 from "./photo-2.jpg";
import RightArrow from "../RightArrow/RightArrow";
import "firebase/auth"
import React, { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

function Hero() {
  var styles = {
    bmBurgerBars: {
      background: "#FCFCFC",
    },
  };

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  var storageRef = storage.ref();

  const [urlsHero, setFileHero ]  = useState([]);

  const aux = ['ola'];

  useEffect(() => {
    const fetchImages = async () => {

    let result = await storageRef.child('home').listAll();
        let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());
        return Promise.all(urlPromises);

    }
    
    const loadImages = async () => {
        const urlsHero = await fetchImages();
        setFileHero(urlsHero);
    }
    loadImages();
    }, []);

  return (
    <div styles={styles} className="HeroContainer">
      <div id="carousel-container">
      {urlsHero && urlsHero.length>0 && aux.map((elem, j)=>{
          return(
            <Carousel
              infiniteLoop
              autoPlay
              interval={4000}
              transitionTime={1000}
              useKeyboardArrows
              showArrows={false}
              showIndicators
              showThumbs={false}
              renderIndicator={false}
              showStatus={false}
              key={j}>
                {urlsHero.map((item,i)=>{   
                  return( 
                      <div key={i}>
                        <img src={urlsHero[i]}/>
                      </div> 
                  )
                  })
                }
              </Carousel>
          )
      })
      }
      </div>
      <div id="title-container">
        <h1>
          Casa da <br /> Ti'Alzira
        </h1>
      </div>

      <div className="arrows-hero">
        <button className="down-arrow">
          <RightArrow color={"#ffffff"} />
        </button>
      </div>
    </div>
  );
}

export default Hero;
