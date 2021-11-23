import React from "react";
import "./Page.css"
import image_atividade from '../../assets/Atividade/atividade.png'
import Location from '../Location/Location'
import ArrowLink from '../ArrowLink/ArrowLink'

function Page(props) {
    return (
        <div className="page-content" style={{backgroundColor: props.properties.background}}>
            <div className="box" >
                <div className="box_text">
                    <h2 style={{color: props.properties.colorTitle}}>{props.properties.title}</h2>
                    { props.properties.location ? <Location/> : undefined}
                    <p className="description" style={{color: props.properties.colorDescription}}>{props.properties.description}</p>
                    { props.properties.buttons ?  
                        <div>
                            <div className="box-button">
                                <ArrowLink text="Locais próximos" color="#07504D" link={"/locals"}/>
                            </div>
                            <div className="box-button-last">
                                <ArrowLink text="Atividades" color="#07504D" link={"/activities"}/>
                            </div>
                        </div>
                    : undefined}
                    { props.properties.homePage ? 
                    <div id="about-know-more">
                        <ArrowLink  text="Saber mais" color="#07504D" link={"/about"}/> 
                    </div>    
                    : undefined }
                </div>
                <img className="image" src={image_atividade}></img>
            </div>
        </div>
    );
}

export default Page;