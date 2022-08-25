import React from "react";
import FormattedDate from "./FormattedDate";
import "./CurrentWeatherInfo.css";

export default function CurrentWeatherInfo(props) {
  return (
    <div className="CurrentWeatherInfo">
      <div className="row align-items-start">
        <div className="col current-location-info">
          {/* Current location */}
          <ul>
            <li className="current-location">{props.data.city}</li>
            <li>
              Date/Time:{" "}
              <span>
                <FormattedDate date={props.data.date} />
              </span>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="col-2">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            className="current-weather-icon"
            alt="current weather icon"
          />
        </div>
        <div className="col-2">
          {/* Current temperature */}
          <div className="clearfix">
            <span className="current-temperature float-left">
              {props.data.temperature}
            </span>
            <small className="unit">
              <span className="active float-left">°C</span>
            </small>
          </div>
        </div>
        <div className="col weather-detail">
          {/* Current Weather Detail */}
          <ul>
            <li className="wind">
              Wind: <span>{props.data.wind}</span> m/h
            </li>
            <li className="cloudiness">
              Cloudiness: <span>{props.data.cloudiness}</span> %
            </li>
            <li className="humidity">
              Humidity: <span>{props.data.humidity}</span> %
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
