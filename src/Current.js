import React, { useState } from "react";
import axios from "axios";
import "./Current.css";
import { SpinnerCircular } from "spinners-react";

export default function Current() {
  const [temperature, setTemperature] = useState(null);
  const [weatherData, setWeatherDate] = useState({ loaded: false });
  function handleResponse(response) {
    // console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setWeatherDate({
      loaded: true,
      temperature: response.data.main.temp,
      date: "Wednesday, 15:00",
      wind: response.data.wind.speed,
      cloudiness: response.data.clouds.all,
      humidity: response.data.main.humidity,
    });
  }
  if (weatherData.loaded) {
    return (
      <div className="Current">
        <div className="row align-items-start">
          <div className="col current-location-info">
            {/* Current location */}
            <ul>
              <li className="current-location">Tokyo</li>
              <li>
                Date/Time: <span>{weatherData.date}</span>
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
                {temperature}
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
                Wind: <span>{weatherData.wind}</span> m/h
              </li>
              <li className="cloudiness">
                Cloudiness: <span>{weatherData.cloudiness}</span> %
              </li>
              <li className="humidity">
                Humidity: <span>{weatherData.humidity}</span> %
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const city = "Tokyo";
    const apiKey = "7b2471b32a9aba35093d93a82db55ee8";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="Current">
        <span className="loading">
          Loading...
          <div className="spin">
            <SpinnerCircular color="#ff847c" size="60" />
          </div>
        </span>
      </div>
    );
  }
}
