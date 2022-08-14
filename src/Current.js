import React from "react";
import CurrentTemp from "./CurrentTemp";
import CurrentWeatherDeet from "./CurrentWeatherDeet";
import CurrentLocation from "./CurrentLocation";
import "./Current.css";

export default function Current() {
  return (
    <div className="Current">
      <div className="row align-items-start">
        <div class="col-2">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            class="current-weather-icon"
            alt="current weather icon"
          />
        </div>
        <div className="col-2">
          {/* Current temperature */}
          <CurrentTemp value={19} />
        </div>
        <div className="col-3 weather-detail">
          {/* Current Weather Detail */}
          <CurrentWeatherDeet wind={10} cloudiness={20} humidity={50} />
        </div>
        <div className="col current-location-info">
          {/* Current location */}
          <CurrentLocation location="Tokyo" date="Tue, Aug 9th" />
        </div>
      </div>
    </div>
  );
}
