import React from "react";
import "./LocalCard.css"
import image_atividade from '../../assets/Atividade/atividade.png'
import ArrowLink from '../ArrowLink/ArrowLink'

class LocalCard extends React.Component {
    render() {
        return (
             <div className="card-local">
                <img className="local-image" src={image_atividade}/>
                <div className="local-content">
                    <h3>Local</h3>
                    <h4 className="text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia</h4>
                    <ArrowLink text="Saber mais" color="#9F6F63"/>
                </div>
             </div>
        );
    }
}

export default LocalCard;