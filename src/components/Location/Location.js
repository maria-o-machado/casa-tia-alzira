import React from "react";
import "./Location.css"
import pin_localizacao from '../../assets/pin_location.svg'

function Location({localizacao, coordenadas}) {
    return (
        <a href={coordenadas} style={{textDecoration: "none"}} target="_blank">
            <div className="box_location">
            <img className="location_pin" src={pin_localizacao} />
            <p className="location_text">{localizacao}</p>
            </div>
        </a>    
    );
}

export default Location;