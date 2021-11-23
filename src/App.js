import logo from "./logo.svg";
import "./App.css";

import Gallery from "./components/Gallery/Gallery";
import Sidebar from './components/Sidebar/Sidebar';

import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Activities from "./components/Activities/Activities";
import Locals from "./components/Locals/Locals";
import Page from "./components/Page/Page";
import PageReverse from "./components/PageReverse/PageReverse";
import About from "./components/About/About";
import Reserve from "./components/Reserve/Reserve";
import Contact from "./components/Contact/Contact";
import HomePage from "./components/HomePage/HomePage";
import React, { useState } from "react";


function App() {
  const local = {
    title: "Local",
    location: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    background: "#FFF",
    colorTitle: "#07504D",
    colorDescription: "#2A2D34",
    buttons: false
};

const atividade = {
  title: "Atividade",
  location: false,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  background: "#FFF",
  colorTitle: "#07504D",
  colorDescription: "#2A2D34",
  buttons: false
};

const [colorNavbar, setColorNavbar] = useState("#FCFCFC");
const [backgroundButton, setBackgroundButton] = useState("#9F6F63");
const [colorButton, setColorButton] = useState("#FCFCFC");


const passColorNavbar = (value) => {
  setColorNavbar(value);
}

const passColorButton = (value) => {
  setColorButton(value);
}

const passBackgroundButton = (value) => {
  setBackgroundButton(value);
}


  
  
  
  return (
    <div className="App">
      <Sidebar color={colorNavbar}/>
      <BrowserRouter>
        <div>
            <Routes>
              <Route path="/" exact element={<HomePage passColorNavbar={passColorNavbar} passColorButton={passColorButton} passBackgroundButton={passBackgroundButton}/>}/>
              <Route path="/gallery" element={<Gallery passColorNavbar={passColorNavbar}/>}/>
              <Route path="/locals" element={<Locals passColorNavbar={passColorNavbar} passColorButton={passColorButton} passBackgroundButton={passBackgroundButton} homePage={false}/>} />           
              <Route path="/activities" element={<Activities passColorNavbar={passColorNavbar} homePage={false}/>} />
              <Route path="/about"  element={<About passColorNavbar={passColorNavbar}/>} />
              <Route path="/activity" element={<Page properties={atividade}/>} />
              <Route path="/local" element={<PageReverse properties={local}/> } />
            <Route path="/contact" element={<Contact passColorNavbar={passColorNavbar}/> } />
          </Routes>
        </div>
      </BrowserRouter>
      <Reserve background={backgroundButton} color={colorButton}/> 
    </div>
  );
}

export default App;
