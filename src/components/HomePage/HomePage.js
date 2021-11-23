import React, { useEffect } from "react";
import HorizontalScroll from 'react-scroll-horizontal'
import Hero from "../../components/Hero/Hero";
import Page from "../../components/Page/Page";
import Activities from "../Activities/Activities";
import Contact from "../Contact/Contact";
import Locals from "../Locals/Locals";
import './HomePage.css'

function HomePage({passColorNavbar, passBackgroundButton, passColorButton}) {
    useEffect(() => {
        passColorNavbar("#FCFCFC");
        passBackgroundButton("#9F6F63");
        passColorButton("#FCFCFC");
    });

    const about = {
        title: "O que é?",
        location: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        background: "#FFF",
        colorTitle: "#07504D",
        colorDescription: "#2A2D34",
        buttons: false
    };

    return (
        <div className="homepage-content">
            <HorizontalScroll reverseScroll = { true }>
                <Hero/>  
                <Page properties={about}/>   
                <Locals passColorNavbar={passColorNavbar} passColorButton={passColorButton} passBackgroundButton={passBackgroundButton}/>   
                <Activities passColorNavbar={passColorNavbar}/>  
                <Contact passColorNavbar={passColorNavbar}/> 
            </HorizontalScroll>
        </div>
        );
    }
  
  export default HomePage;