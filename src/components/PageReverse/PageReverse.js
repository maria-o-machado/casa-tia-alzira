import React, { useEffect } from "react";
import "./PageReverse.css"
import image_atividade from '../../assets/Atividade/atividade.png'
import Location from '../Location/Location'
import ArrowLink from "../ArrowLink/ArrowLink";

function PageReverse({ properties, passColorNavbar }) {
    useEffect(() => {
        passColorNavbar("#07504D");
    });

    return (
        <div className="page-content" style={{ backgroundColor: properties.background }}>
            <div className="box_reverse" >
                {properties.homePage ?
                <div className="content_location">
                    <img className="image_reverse" src={image_atividade}></img>
                    <div id="about-know-more">
                        <ArrowLink text="Saber mais" color="#E0D0C1" link={"/about"} />
                    </div>
                </div>
                    : 
                <img className="image_reverse" src={image_atividade}></img>
                }
                <div className="box_text_reverse">
                    {properties.location ?
                        <div>
                            <h2 className="box_title_reverse page_title box_title_location" style={{ color: properties.colorTitle }}>{properties.title}</h2>
                            <Location />
                        </div>
                         : 
                         <h2 className="box_title_reverse page_title" style={{ color: properties.colorTitle }}>{properties.title}</h2>
                        }
                    <p className="description" style={{ color: properties.colorDescription }}>{properties.description}</p>
                </div>
            </div>
        </div>
    );
}

export default PageReverse;