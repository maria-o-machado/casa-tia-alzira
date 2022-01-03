import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Activities from "./components/Activities/Activities";
import Locals from "./components/Locals/Locals";
import Page from "./components/Page/Page";
import PageReverse from "./components/PageReverse/PageReverse";
import About from "./components/About/About";
import Reserve from "./components/Reserve/Reserve";
import Contact from "./components/Contact/Contact";
import { useEffect } from "react";
import { useGetActivities } from "./hooks/useGetActivities";

import HomePage from "./components/HomePage/HomePage";
import React, { useState } from "react";
import image_atividade from "./assets/Atividade/atividade.png";
import image_local from "./assets/Locais/local4.png";

import { useGetLocals } from "./hooks/useGetLocals";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

function App() {
  const local = {
    title: "Local",
    location: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    background: "#FFF",
    colorTitle: "#07504D",
    colorDescription: "#2A2D34",
    buttons: false,
    image: image_local,
  };

  const atividade = {
    title: "Atividade",
    location: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    background: "#FFF",
    colorTitle: "#07504D",
    colorDescription: "#2A2D34",
    buttons: false,
    image: image_atividade,
  };

  const [locals, setLocals] = useState([]);
  const [activities, setActivities] = useState([]);

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

  const getLocals = async (db) => {
    const localCol = collection(db, 'Local');
    const localSnapshot = await getDocs(localCol);
     const localList = localSnapshot.docs.map(doc => doc.data());

     setLocals(localList);
  }

  const getActivities = async (db) => {
    const activityCol = collection(db, 'Atividade');
    const activitySnapshot = await getDocs(activityCol);
     const activityList = activitySnapshot.docs.map(doc => doc.data());

     setActivities(activityList);
  }

  useEffect(() => {
    getLocals(db);
    getActivities(db);
  }, [db]);

  

  const [colorNavbar, setColorNavbar] = useState("#FCFCFC");
  const [backgroundButton, setBackgroundButton] = useState("#9F6F63");
  const [colorButton, setColorButton] = useState("#FCFCFC");

  const passColorNavbar = (value) => {
    setColorNavbar(value);
  };

  const passColorButton = (value) => {
    setColorButton(value);
  };

  const passBackgroundButton = (value) => {
    setBackgroundButton(value);
  };

  useEffect(() => {
    document.title = "Casa da Ti' Alzira";
  }, []);

  return (
    <div className="App">
      <Sidebar color={colorNavbar} />
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <HomePage
                  passColorNavbar={passColorNavbar}
                  passColorButton={passColorButton}
                  passBackgroundButton={passBackgroundButton}
                />
              }
            />
            <Route
              path="/gallery"
              element={<Gallery passColorNavbar={passColorNavbar} />}
            />
            <Route
              path="/locals"
              element={
                <Locals
                  passColorNavbar={passColorNavbar}
                  passColorButton={passColorButton}
                  passBackgroundButton={passBackgroundButton}
                  homePage={false}
                />
              }
            />
            <Route
              path="/activities"
              element={
                <Activities
                  passColorNavbar={passColorNavbar}
                  homePage={false}
                />
              }
            />
            <Route
              path="/about"
              element={<About passColorNavbar={passColorNavbar} />}
            />
            {
              activities && activities.map((item,i)=>{
                  console.log(item);
                  return( 
                    <Route
                    path={`/activity/${i}`}
                    element={
                      <Page
                        properties={atividade}
                        passColorNavbar={passColorNavbar}
                        info = {item}
                      />
                    }
                    key={i}
                  />
                  )
              })
            }
            {
              locals && locals.map((item,i)=>{
                  console.log(item);
                  return( 
                    <Route
                    path={`/local/${i}`}
                    element={
                      <PageReverse
                        properties={local}
                        info = {item}
                        passColorNavbar={passColorNavbar}
                      />
                    }
                    key={i}
                  />
                  )
              })
            }
            <Route
              path="/contact"
              element={<Contact passColorNavbar={passColorNavbar} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <Reserve background={backgroundButton} color={colorButton} />
    </div>
  );
}

export default App;
