import React, { useEffect, useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    // console.log(response.data);
    setLoaded(true);
    setForecast(response.data.daily);
  }
  //   console.log(props);
  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row forecast-container">
          {forecast.map(function(dailyForecast, index) {
            if (index < 5) {
              return (
                <span className="col" key={index}>
                  {" "}
                  <WeatherForecastDay data={dailyForecast} />
                </span>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "7b2471b32a9aba35093d93a82db55ee8";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
