import React, { useEffect, useState } from "react";
import Page from "../Page/Page";
import PageReverse from "../PageReverse/PageReverse";
import "./About.css";
import image from "../../assets/About/house.jpeg";
import image1 from "../../assets/About/location.jpeg";
import image2 from "../../assets/About/local.png";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";

function About({ passColorNavbar }) {
  const page0 = {
    title: "O que é?",
    location: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    background: "#FFF",
    colorTitle: "#07504D",
    colorDescription: "#2A2D34",
    buttons: false,
    image: image,
  };

  const page1 = {
    title: "Onde se localiza?",
    location: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    background: "#07504D",
    colorTitle: "#E0D0C1",
    colorDescription: "#FCFCFC",
    buttons: false,
    image: image1,
  };

  const page2 = {
    title: "O que posso fazer nas proximidades?",
    location: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    background: "#FFF",
    colorTitle: "#07504D",
    colorDescription: "#2A2D34",
    buttons: true,
    image: image2,
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
    const aboutCol = collection(db, "Sobre");
    const aboutSnapshot = await getDocs(aboutCol);
    const aboutList = aboutSnapshot.docs.map((doc) => doc.data());

    setAbout(aboutList);
  };

  useEffect(() => {
    getAbout(db);
  }, [db]);

  const [urlsAbout, setFilesAbout] = useState([]);

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  var storageRef = storage.ref();

  useEffect(() => {
    const fetchImages = async () => {
      let result = await storageRef.child("sobre").listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );

      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urlsAbout = await fetchImages();
      setFilesAbout(urlsAbout);
    };
    loadImages();
  }, []);

  useEffect(() => {
    passColorNavbar("#9F6F63");
  });

  return (
    <div className="about-content">
      {about &&
        about.map((item, i) => {
          return i == 0 ? (
            <Page
              properties={page0}
              passColorNavbar={passColorNavbar}
              info={item}
              image={urlsAbout[0]}
              key={i}
            />
          ) : i == 1 ? (
            <PageReverse
              properties={page1}
              passColorNavbar={passColorNavbar}
              info={item}
              image={urlsAbout[1]}
              key={i}
            />
          ) : (
            <Page
              properties={page2}
              passColorNavbar={passColorNavbar}
              info={item}
              image={urlsAbout[2]}
              key={i}
            />
          );
        })}
    </div>
  );
}

export default About;
