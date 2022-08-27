import React from "react";
import Icons from "./Icons";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  //   console.log(props);

  const apiKey = "7b2471b32a9aba35093d93a82db55ee8";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

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
