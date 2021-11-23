import logo from "./logo.svg";
import "./App.css";

import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import ReactDOM from "react-dom";
import Sidebar from './components/Sidebar/Sidebar';

import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Activities from "./components/Activities/Activities";
import Locals from "./components/Locals/Locals";
import Page from "./components/Page/Page";
import PageReverse from "./components/PageReverse/PageReverse";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import HomePage from "./components/HomePage/HomePage";


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

  return (
    <div className="App">
      

      <Sidebar/>

      <BrowserRouter>
       
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/activities" element={<Activities/>} />
            <Route path="/locals" element={<Locals/>} />           
            <Route path="/about" element={<About/>} />
            <Route path="/activity" element={<Page properties={atividade}/>} />
            <Route path="/local" element={<PageReverse properties={local}/> } />
            <Route path="/contact" element={<Contact/> } />
            
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
