import React from "react";
import "./Reserve.css";

function Reserve(props) {
  return (
    <div>
      <button
        className="button-reserve"
        style={{ backgroundColor: props.background, color: props.color }}
      >
        Reserve
      </button>
    </div>
  );
}

export default Reserve;
