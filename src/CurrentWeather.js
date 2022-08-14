import React from "react";

export default function CurrentWeatherDeet(props) {
  return (
    <div className="CurrentWeatherDeet">
      <ul>
        <li className="wind">
          Wind: <span>{props.wind}</span> m/h
        </li>
        <li className="cloudiness">
          Cloudiness: <span>{props.cloudiness}</span> %
        </li>
        <li className="humidity">
          Humidity:<span>{props.humidity}</span> %
        </li>
      </ul>
    </div>
  );
}
