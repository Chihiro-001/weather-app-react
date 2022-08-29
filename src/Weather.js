import React, { useState } from "react";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import Forecast from "./Forecast";
import axios from "axios";
import "./Weather.css";
import { SpinnerCircular } from "spinners-react";

export default function Weather(props) {
  const [weatherData, setWeatherDate] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    // console.log(response.data);
    setWeatherDate({
      loaded: true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      cloudiness: response.data.clouds.all,
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "7b2471b32a9aba35093d93a82db55ee8";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  // function showCurrentLocation() {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     let apiKey = "7b2471b32a9aba35093d93a82db55ee8";
  //     let lat = position.coords.latitude;
  //     let lon = position.coords.longitude;
  //     let apiUrlCurrent = "https://api.openweathermap.org/geo/1.0/reverse?";
  //     axios
  //       .get(`${apiUrlCurrent}lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`)
  //       .then(sendCityCoords);
  //   });
  // }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col input-group">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city"
                onChange={handleCityChange}
              />
              <button className="btn btn-outline-secondary" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              {/* <button
                className="btn btn-outline-secondary"
                type="button"
                // onClick={showCurrentLocation}
              >
                <i className="fa-solid fa-location-crosshairs"></i>
              </button> */}
            </form>
          </div>
        </div>
        <CurrentWeatherInfo data={weatherData} />
        <div className="forecast">
          <Forecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="Weather">
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
