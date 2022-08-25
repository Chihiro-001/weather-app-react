import React from "react";

export default function FormattedDate(props) {
  // For days
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  // For hours
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  // For minutes
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="FormattedDate">
      {day}, {hours}:{minutes}
    </div>
  );
}
