import logo from "./logo.svg";
import "./App.css";

import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Hamburger from "./components/Hamburguer/Hamburger";
import ReactDOM from "react-dom";
import Sidebar from './components/Sidebar/Sidebar';

import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Activities from "./components/Activities/Activities";

function App() {
  return (
    <div className="App">
      <Sidebar/>

      <BrowserRouter>
       
        <div>
          <Routes>
            <Route exact path="/" element={<Hero/>}/>
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/activities" element={<Activities/>} />
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
