import React, { useEffect } from "react";
import Page from "../Page/Page";
import PageReverse from "../PageReverse/PageReverse";
import "./About.css";
import image from "../../assets/About/house.jpeg";
import image1 from "../../assets/About/location.jpeg";
import image2 from "../../assets/About/local.png";

function About({ passColorNavbar }) {
  const page1 = {
    title: "O que é?",
    location: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    background: "#FFF",
    colorTitle: "#07504D",
    colorDescription: "#2A2D34",
    buttons: false,
    image: image
  };

  const page2 = {
    title: "Onde se localiza?",
    location: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    background: "#07504D",
    colorTitle: "#E0D0C1",
    colorDescription: "#FCFCFC",
    buttons: false,
    image: image1
  };

  const page3 = {
    title: "O que posso fazer nas proximidades?",
    location: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    background: "#FFF",
    colorTitle: "#07504D",
    colorDescription: "#2A2D34",
    buttons: true,
    image: image2
  };

  useEffect(() => {
    passColorNavbar("#9F6F63");
  });

  return (
    <div className="about-content" >
        <Page properties={page1} passColorNavbar={passColorNavbar} />
        <PageReverse properties={page2} passColorNavbar={passColorNavbar} />
        <Page properties={page3} passColorNavbar={passColorNavbar} />
    </div>
  );
}

export default About;
