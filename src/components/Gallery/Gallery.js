import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import "./Gallery.css";
import { Carousel } from "react-responsive-carousel";

import React, { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

function Gallery({ passColorNavbar }) {
  useEffect(() => {
    passColorNavbar("#FCFCFC");
  });

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

  const [urlsGalley, setFileGallery ]  = useState([]);

  const aux = ['ola'];

  useEffect(() => {
    const fetchImages = async () => {

    let result = await storageRef.child('galeria').listAll();
        let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());
        return Promise.all(urlPromises);

    }
    
    const loadImages = async () => {
        const urlsGalley = await fetchImages();
        setFileGallery(urlsGalley);
    }
    loadImages();
    }, []);

  return (
    <div className="GalleryContainer">
      {urlsGalley && urlsGalley.length>0 && aux.map((elem, j)=>{
        return(
          <Carousel
            infiniteLoop
            autoPlay
            interval={4000}
            transitionTime={1000}
            useKeyboardArrows
            showIndicators
            showThumbs={false}
            showStatus={false}
            key={j}>
            {urlsGalley.map((item,i)=>{   
              return( 
                  <div key={i}>
                    <img src={urlsGalley[i]}/>
                  </div> 
              )
              })
            }
          </Carousel>
          )
        })
      }
    </div>
  );
}

export default Gallery;
