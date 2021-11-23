import React, { useEffect } from "react";
import "./PageReverse.css"
import image_atividade from '../../assets/Atividade/atividade.png'
import Location from '../Location/Location'

function PageReverse({properties, passColorNavbar}) {
    useEffect(() => {
        passColorNavbar("#07504D");
    });

    return (
        <div className="page-content" style={{backgroundColor: properties.background}}>
             <div className="box_reverse" >
                <img className="image_reverse" src={image_atividade}></img>
                <div className="box_text_reverse">
                <h5 className="box_title_reverse" style={{color: properties.colorTitle}}>{properties.title}</h5>
                { properties.location ? <Location/> : undefined}
                <p className="description" style={{color: properties.colorDescription}}>{properties.description}</p>
                </div>
            </div>
        </div> 
    );
}

export default PageReverse;