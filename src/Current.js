import React from "react";
import axios from "axios";
import "./Current.css";

export default function Current() {
  function handleResponse(response) {
    console.log(response.data);
  }
  const city = "Tokyo";
  const apiKey = "7b2471b32a9aba35093d93a82db55ee8";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&
  units= metric`;
  axios.get(apiUrl).then(handleResponse);
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
          <div className="clearfix">
            <span className="current-temperature float-left">20</span>
            <small className="unit">
              <span className="active float-left">°C</span>
            </small>
          </div>
        </div>
        <div className="col-3 weather-detail">
          {/* Current Weather Detail */}
          <ul>
            <li className="wind">
              Wind: <span>10</span> m/h
            </li>
            <li className="cloudiness">
              Cloudiness: <span>30</span> %
            </li>
            <li className="humidity">
              Humidity:<span>24</span> %
            </li>
          </ul>
        </div>
        <div className="col current-location-info">
          {/* Current location */}
          <ul>
            <li className="current-location">Courtenay</li>
            <li>
              last updated: <span>August 14th</span>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
