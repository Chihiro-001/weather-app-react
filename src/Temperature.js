import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <span className="current-temperature float-left">
          {Math.round(props.celsius)}
        </span>
        <small className="unit">
          <span className="active float-left">°C</span> |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            ℉
          </a>
        </small>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <span className="current-temperature float-left">
          {Math.round(fahrenheit())}
        </span>
        <small className="unit">
          <span className="active float-left"> ℉ </span> |
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
        </small>
      </div>
    );
  }
}
