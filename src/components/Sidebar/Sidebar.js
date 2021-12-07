import logo from "./logo.svg";
import fb from "./fb.svg";
import insta from "./inst.svg";
import { slide as Menu } from "react-burger-menu";
import css from "./Sidebar.css";
import $ from "jquery";

function Sidebar({ color }) {
  var styles = {
    bmBurgerBars: {
      background: color,
      height: "3px",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },

    bmCross: {
      height: "32px",

      background: "#FCFCFC",
    },
    bmMenuWrap: {
      position: "fixed",
      width: "fit-content",
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
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <Menu className="sidebar-container" theme={css} styles={styles}>
      <div>
        <a id="home" className="menu-item" href="/">
          <img src={logo} />
        </a>
        <div id="nav-links">
          <a id="about" className="menu-item main" href="/about">
            Sobre
          </a>
          <a id="activities" className="menu-item main" href="/activities">
            Atividades
          </a>
          <a id="gallery" className="menu-item main" href="/gallery">
            Galeria
          </a>
          <a id="places" className="menu-item main" href="/locals">
            Locais a visitar
          </a>
          <a id="contact" className="menu-item main" href="/contact">
            Contacto
          </a>
        </div>

        <div id="social-links">
          <a id="book" className="menu-item" href="">
            Reservar
          </a>
          <div id="social-icons">
            <a id="facebook" href="">
              <img src={fb} />
            </a>

            <a id="instagram" href="">
              <img src={insta} />
            </a>
          </div>
        </div>
      </div>
    </Menu>
  );
}

export default Sidebar;
