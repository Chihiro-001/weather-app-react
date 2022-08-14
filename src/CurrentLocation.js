import React from "react";
import "./CurrentLocation.css";

export default function CurrentLocation(props) {
  return (
    <div className="CurrentLocation">
      <ul>
        <li className="current-location">{props.location}</li>
        <li>
          last updated: <span>{props.date}</span>
        </li>
        <li></li>
      </ul>
    </div>
  );
}
