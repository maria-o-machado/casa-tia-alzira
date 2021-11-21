import React from "react";
import "./Sobre.css"
import Page from '../Page/Page'
import PageReverse from '../PageReverse/PageReverse'
import Reserve from "../Reserve/Reserve";

function Sobre() {
    const page1 = {
        title: "O que é?",
        location: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        background: "#FFF",
        colorTitle: "#07504D",
        colorDescription: "#2A2D34",
        buttons: false
    };

    const page2 = {
        title: "Onde se localiza?",
        location: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        background: "#07504D",
        colorTitle: "#E0D0C1",
        colorDescription: "#FCFCFC",
        buttons: false
    };

    const page3 = {
        title: "O que posso fazer nas proximidades?",
        location: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        background: "#FFF",
        colorTitle: "#07504D",
        colorDescription: "#2A2D34",
        buttons: true
    };

    return (
        <div class="scrolling-wrapper">
                <Page properties={page1}/>  
                <Reserve background="#9F6F63" color="#FCFCFC"/>
                <PageReverse properties={page2}/> 
                <Page properties={page3}/>  
        </div>
    );
}

export default Sobre;