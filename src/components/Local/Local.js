import React from "react";
import "./Local.css"
import image_atividade from '../../assets/Atividade/atividade.png'
import pin_localizacao from '../../assets/pin_location.svg'
import Reserve from "../Reserve/Reserve";


class Local extends React.Component {
    render() {
        return (
             <div className="box">
                 <img className="image" src={image_atividade}></img>
                 <div className="box_text">
                    <h1>Nome do Local</h1>
                    <div className="box_location">
                        <img className="location_pin" src={pin_localizacao}/>
                        <p className="location_text">Localização do local</p>
                    </div>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 </div>
                 <Reserve background="#9F6F63" color="#FCFCFC"/>
             </div>
        );
    }
}

export default Local;