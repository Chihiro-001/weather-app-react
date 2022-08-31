import React from "react";

// Testing a unit conversion

export default function ForecastTemperature(props) {
  //   const [unit, setUnit] = useState(activeUnitCelsius);

  //   function convertToFahrenheit(event) {
  //     event.preventDefault();
  //     setUnit("fahrenheit");
  //   }
  //   function fahrenheit() {
  //     return (props.celsius * 9) / 5 + 32;
  //   }
  //   function convertToCelsius(event) {
  //     event.preventDefault();
  //     setUnit("celsius");
  //   }

  function maxTemperature() {
    let temp = Math.round(props.forecastTemp.max);
    return `${temp}°`;
  }
  function minTemperature() {
    let temp = Math.round(props.forecastTemp.min);
    return `${temp}°`;
  }

  let activeUnitCelsius = document.querySelector("#active-unit-celsius");
  let activeUnitFahrenheit = document.querySelector("#active-unit-fahrenheit");

  if (activeUnitCelsius) {
    return (
      <div className="ForecastTemperature">
        <span className="max-temperature">{maxTemperature()}</span>
        <span className="min-temperature">{minTemperature()}</span>
      </div>
    );
  } else if (activeUnitFahrenheit) {
    return (
      <div className="ForecastTemperature">
        <span className="max-temperature">
          {(maxTemperature() * 9) / 5 + 32}
        </span>
        <span className="min-temperature">
          {(minTemperature() * 9) / 5 + 32}
        </span>
      </div>
    );
  }

  //   return (
  //     <div className="ForecastTemperature">
  //       <span className="max-temperature">{maxTemperature()}</span>
  //       <span className="min-temperature">{minTemperature()}</span>
  //     </div>
  //   );
}
