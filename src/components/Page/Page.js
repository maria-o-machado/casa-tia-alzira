import React from "react";
import "./Page.css"
import image_atividade from '../../assets/Atividade/atividade.png'
import Location from '../Location/Location'
import ArrowLink from '../ArrowLink/ArrowLink'

function Page(props) {
    return (
        <div style={{backgroundColor: props.properties.background}}>
            <div className="box" >
                <div className="box_text">
                    <h1 style={{color: props.properties.colorTitle}}>{props.properties.title}</h1>
                    { props.properties.location ? <Location/> : undefined}
                    <p className="description" style={{color: props.properties.colorDescription}}>{props.properties.description}</p>
                    { props.properties.buttons ?  
                        <div>
                            <div className="box-button">
                                <ArrowLink text="Locais próximos" color="#07504D"/>
                            </div>
                            <div className="box-button-last">
                                <ArrowLink text="Atividades" color="#07504D"/>
                            </div>
                        </div>
                    : undefined}
                </div>
                <img className="image" src={image_atividade}></img>
            </div>
        </div>
    );
}

export default Page;