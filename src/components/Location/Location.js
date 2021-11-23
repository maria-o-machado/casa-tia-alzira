import React from "react";
import "./Location.css"
import pin_localizacao from '../../assets/pin_location.svg'

class Location extends React.Component {
    render() {
        return (
            <div className="box_location">
                <img className="location_pin" src={pin_localizacao} />
                <p className="location_text">Localização do local</p>
            </div>
        );
    }
}

export default Location;