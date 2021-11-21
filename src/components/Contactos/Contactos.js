import React from "react";
import "./Contactos.css"
import image_atividade from '../../assets/Atividade/atividade.png'
import Reserve from "../Reserve/Reserve";


class Contactos extends React.Component {
    render() {
        return (
            <div className="box">
                 <div className="box_text">
                    <h1 className="title">Quer contactar-nos?</h1>
                    <p className="description">Poderá fazê-lo através das seguintes informações:</p>
                    <div className="box_enderecos">
                        <div className="box_contactos">
                            <p><b>Morada</b></p>
                            <p>Rua da Oli n.º 123</p>
                            <p>1020-293 Freixeda</p>
                        </div>
                        <div className="box_contactos">
                            <p><b>Contactos</b></p>
                            <p>912345678</p>
                            <p>casatiaalzira@gmail.com</p>
                        </div>
                    </div>
                </div>
                <img className="image" src={image_atividade}></img>
                <Reserve background="#9F6F63" color="#FCFCFC"/>
             </div>
        );
    }
}

export default Contactos;