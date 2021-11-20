import React from "react";
import "./Atividade.css"
import image_atividade from '../../assets/Atividade/atividade.png'
import Reserve from "../Reserve/Reserve";

class Atividade extends React.Component {
    render() {
        return (
             <div className="box">
                 <div className="box_text">
                    <h1>Nome Atividade</h1>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 </div>
                 <img className="image" src={image_atividade}></img>
                 <Reserve background="#9F6F63" color="#FCFCFC"/>
             </div>
        );
    }
}

export default Atividade;