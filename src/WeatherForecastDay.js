import React from "react";
import Icons from "./Icons";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }
  function minTemperature() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{day()}</div>
      <Icons code={props.data.weather[0].icon} size={32} />
      <div className="forecast-temperature">
        <span className="max-temperature">{maxTemperature()}</span>
        <span className="min-temperature">{minTemperature()}</span>
      </div>
    </div>
  );
}
