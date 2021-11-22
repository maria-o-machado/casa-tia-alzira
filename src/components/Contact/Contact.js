import React from "react";
import "./Contact.css"
import image_atividade from '../../assets/Atividade/atividade.png'
import Reserve from "../Reserve/Reserve";


class Contact extends React.Component {
    render() {
        return (
            <div className="contact-content">
                 <div className="contact-text">
                    <h2 className="contact-title">Quer contactar-nos?</h2>
                    <h4 className="contact-description">Poderá fazê-lo através das seguintes informações:</h4>
                    <div className="contacts">
                        <div className="contact">
                            <p><b>Morada</b></p>
                            <p>Rua da Oli n.º 123</p>
                            <p>1020-293 Freixeda</p>
                        </div>
                        <div className="contact">
                            <p><b>Contactos</b></p>
                            <p>912345678</p>
                            <p>casatiaalzira@gmail.com</p>
                        </div>
                    </div>
                </div>
                <img className="contact-image" src={image_atividade}></img>
                <Reserve background="#9F6F63" color="#FCFCFC"/>
             </div>
        );
    }
}

export default Contact;