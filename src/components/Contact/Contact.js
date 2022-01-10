import React, { useEffect } from "react";
import "./Contact.css";

function Contact({ passColorNavbar, image }) {
  useEffect(() => {
    passColorNavbar("#FCFCFC");
  });

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-text">
          <h2 className="contact-title">Quer contactar-nos?</h2>
          <h4 className="contact-description">
            Poderá fazê-lo através das seguintes informações:
          </h4>
          <div className="contacts">
            <div className="contact">
              <p>
                <b>Morada</b>
              </p>
              <p>Rua da Oli n.º 123</p>
              <p>1020-293 Freixeda</p>
            </div>
            <div className="contact">
              <p>
                <b>Contactos</b>
              </p>
              <p>912345678</p>
              <p>casatiaalzira@gmail.com</p>
            </div>
          </div>
        </div>
        <img className="contact-image" src={image}></img>
      </div>
    </div>
  );
}

export default Contact;
