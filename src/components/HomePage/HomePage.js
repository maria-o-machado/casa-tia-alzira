import React, { useEffect, useState } from "react";
import HorizontalScroll from "react-scroll-horizontal";
import Hero from "../../components/Hero/Hero";
import Activities from "../Activities/Activities";
import Contact from "../Contact/Contact";
import Locals from "../Locals/Locals";
import PageReverse from "../PageReverse/PageReverse";
import image from "../../assets/About/house.jpeg";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import "./HomePage.css";
import Page from "../Page/Page";
import "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

function HomePage({ passColorNavbar, passBackgroundButton, passColorButton }) {
  useEffect(() => {
    passColorNavbar("#FCFCFC");
    passBackgroundButton("#9F6F63");
    passColorButton("#FCFCFC");
  });

  const page0 = {
    title: "O que é?",
    location: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    background: "#07504D",
    colorTitle: "#E0D0C1",
    colorDescription: "#FCFCFC",
    buttons: false,
    homePage: true,
    image: image,
  };

  const [about, setAbout] = useState([]);

  const [numberMax, setNumber] = useState(3);

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const getAbout = async (db) => {
    const aboutCol = collection(db, 'Sobre');
    const aboutSnapshot = await getDocs(aboutCol);
     const aboutList = aboutSnapshot.docs.map(doc => doc.data());

     setAbout(aboutList);
  }

  useEffect(() => {
    getAbout(db);
  }, [db]);

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  var storageRef = storage.ref();

  const [urlsAbout, setFilesAbout]  = useState([]);
  const [urlsContact, setFilesContact]  = useState([]);

  useEffect(() => {
    const fetchImages = async () => {

    let result = await storageRef.child('sobre').listAll();
        let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());

        
    
        return Promise.all(urlPromises);

    }
    
    const loadImages = async () => {
        const urlsAbout = await fetchImages();
        setFilesAbout(urlsAbout);
    }
    loadImages();
    }, []);

  useEffect(() => {
    passColorNavbar("#9F6F63");
  });

  
  useEffect(() => {
    const fetchImagesCont = async () => {

    let result = await storageRef.child('contacto').listAll();
        let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());

        
    
        return Promise.all(urlPromises);

    }
    
    const loadImages = async () => {
        const urlsContact = await fetchImagesCont();
        setFilesContact(urlsContact);
    }
    loadImages();
    }, []);



  return (
    <div className="homepage-content">
      <Hero />
      {
        about && about.map((item,i)=>{
          return( i == 0 ? 
            <Page properties={page0} passColorNavbar={passColorNavbar} info={item} image={urlsAbout[0]} key={i}/>
            : 
            undefined    
          )
        })
      }
      
      <Activities passColorNavbar={passColorNavbar} homePage={true} />
      <Locals
        passColorNavbar={passColorNavbar}
        passColorButton={passColorButton}
        passBackgroundButton={passBackgroundButton}
        homePage={true}
      />
      <Contact passColorNavbar={passColorNavbar} image={urlsContact[0]} />
    </div>
  );
}

export default HomePage;
