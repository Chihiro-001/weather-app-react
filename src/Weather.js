import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [temperature, setTemperature] = useState(null);
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }
  if (temperature !== null) {
    return (
      <div className="Weather">
        <h1>
          The temperature in {props.city} is {Math.round(temperature)} ℃
        </h1>
      </div>
    );
  } else {
    // better to have api here so that api will run only when there is no city specified.
    // If api keep receiving requests for temperatures, it will eventually block us.
    let apiKey = "7b2471b32a9aba35093d93a82db55ee8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
    return (
      <div className="Weather">
        <h1>The temperature in {props.city} is loading...</h1>
      </div>
    );
  }
}
