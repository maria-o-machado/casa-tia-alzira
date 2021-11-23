import React from "react";
import "./Locals.css"
import LocalCard from "../LocalCard/LocalCard";
import Reserve from "../Reserve/Reserve";

class Locals extends React.Component {
    render() {
        return (
             <div className="locals-container">
                <h2 className="title-locals">Que locais posso visitar nas proximidades?</h2>
                <div className="locals-content">
                    <LocalCard/>
                    <LocalCard/>
                    <LocalCard/>
                </div>
                <Reserve background="#E0D0C1" color="#9F6F63"/>
             </div>
        );
    }
}

export default Locals;