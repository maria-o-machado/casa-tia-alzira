import React from "react";
import { Button } from "react-bootstrap";
import "./Reserve.css"

function Reserve(props) {
    return (
        <div>
            <Button className="button-reserve" style={{backgroundColor: props.background, color: props.color}}>Reserve</Button>
        </div>
    );
}

export default Reserve;