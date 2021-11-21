import logo from "./logo.png";
import fb from "./fb.svg";
import insta from "./inst.svg";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
function Sidebar() {
  function showSettings(event) {
    event.preventDefault();
  }

  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "32px",
      height: "20px",
      left: "48px",
      top: "44px",
    },
    bmBurgerBars: {
      background: "#FCFCFC",
      height: "4px",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
        left:"40px",
        height: "32px",
        width: "32px",
        top:"36px"
    },
    bmCross: {
        height: "32px",

      background: "#FCFCFC",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#07504D",
      height: "100vh",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      height: "100%",
    },
    bmItem: {
        height: "100%",

      display: "flex",
      flexDirection: "column",
      padding: "15vh 100px 8vh 100px",

    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <Menu className="sidebar-container" width={"372px"} styles={styles}>
      <div>
        <a id="home" className="menu-item" href="/">
          <img src={logo} />
        </a>
        <div id="nav-links">
          <a id="about" className="menu-item" href="/about">
            Sobre
          </a>
          <a id="activities" className="menu-item" href="/activities">
            Atividades
          </a>
          <a id="gallery" className="menu-item" href="/gallery">
            Galeria
          </a>
          <a id="places" className="menu-item" href="/places">
            Locais a visitar
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contacto
          </a>
        </div>

        <div id="social-links">
          <a id="book" className="menu-item" href="">
            Reservar
          </a>
          <div id="social-icons">
          <a id="facebook" href="">
               <img  src={fb} />
               </a> 

           <a  href="">

            <img src={insta} />
            </a>
          </div>
        </div>
      </div>
    </Menu>
  );
}

export default Sidebar;