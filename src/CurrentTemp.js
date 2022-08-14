import React from "react";
import "./CurrentTemp.css";

export default function CurrentTemp(prop) {
  return (
    <div className="CurrentTemp">
      <div className="clearfix">
        <span className="current-temperature float-left">{prop.value}</span>
        <small className="unit">
          <span className="active float-left">°C</span>
        </small>
      </div>
    </div>
  );
}
