import React from "react";
import Icons from "./Icons";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-container">
            <div className="forecast-day">Sun</div>
            <Icons code="01d" size={32} />
            <div className="forecast-temperature">
              <span className="max-temperature">20°</span>
              <span className="min-temperature">15°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
