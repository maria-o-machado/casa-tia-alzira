import React from "react";
import "./PageReverse.css"
import image_atividade from '../../assets/Atividade/atividade.png'
import Location from '../Location/Location'

function PageReverse(props) {
    return (
        <div style={{backgroundColor: props.properties.background}}>
             <div className="box_reverse" >
                <img className="image_reverse" src={image_atividade}></img>
                <div className="box_text_reverse">
                <h5 className="box_title_reverse" style={{color: props.properties.colorTitle}}>{props.properties.title}</h5>
                { props.properties.location ? <Location/> : undefined}
                <p className="description" style={{color: props.properties.colorDescription}}>{props.properties.description}</p>
                </div>
            </div>
        </div> 
    );
}

export default PageReverse;