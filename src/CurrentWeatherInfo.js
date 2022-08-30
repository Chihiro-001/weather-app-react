import React from "react";
import FormattedDate from "./FormattedDate";
import Icons from "./Icons";
import Temperature from "./Temperature";
import "./CurrentWeatherInfo.css";

export default function CurrentWeatherInfo(props) {
  return (
    <div className="CurrentWeatherInfo">
      <div className="row align-items-start">
        <div className="col-sm current-location-info">
          {/* Current location */}
          <ul>
            <li className="current-location">{props.data.city}</li>
            <li>
              <FormattedDate date={props.data.date} size={50} />
            </li>
          </ul>
          <div className="description text-capitalize">
            {props.data.description}
          </div>
        </div>
        <div className="col-sm-2 d-none d-md-block">
          <div className="float-end">
            <Icons code={props.data.icon} size={60} />
          </div>
        </div>
        <span className="temp-container">
          {" "}
          <div className="col-sm-2">
            {/* Current temperature */}
            <div className="clearfix">
              <Temperature celsius={props.data.temperature} />
            </div>
          </div>
        </span>
        <div className="col-sm weather-detail">
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
