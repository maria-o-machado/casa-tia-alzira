import React, { useEffect } from "react";
import "./Locals.css"
import LocalCard from "../LocalCard/LocalCard";
import { Carousel } from 'react-responsive-carousel';
import Reserve from "../Reserve/Reserve";

function Locals({passColorNavbar, passBackgroundButton, passColorButton}) {
    useEffect(() => {
        passColorNavbar("#FCFCFC");
        passBackgroundButton("#E0D0C1");
        passColorButton("#9F6F63");
    });

    return (
        <div className="locals-page">
            <div className="locals-container">
                <h2 className="title-locals">Que locais posso visitar nas proximidades?</h2>
                <div id="carousel-container-locals">
                    <Carousel infiniteLoop transitionTime= {1000} showThumbs={false} showStatus={false} renderIndicator={false}>
                        <div className="locals-content">
                            <LocalCard/>
                            <LocalCard/>
                            <LocalCard/>
                        </div>
                        <div className="locals-content">
                            <LocalCard/>
                            <LocalCard/>
                            <LocalCard/>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>  
    );
}

export default Locals