import React from "react";

// Testing the unit conversion
export default function DisplayALl() {
  // Using Temperature.js
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
      <div className="DisplayAll">
        {/* Need to integrate other external components here */}
        {/* If unit is set to celsius */}

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
      <div className="DisplayAll">
        {/* If unit is set to conversion */}
        <span className="current-temperature float-left">
          {Math.round(fahrenheit())}
        </span>
        <small className="unit">
          <span className="active float-left"> °F </span> |
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
        </small>
      </div>
    );
  }
}
