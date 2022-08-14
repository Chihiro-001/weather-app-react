import React from "react";
import "./Input.css";

export default function Input() {
  return (
    <div className="Input">
      <div className="row">
        <div className="col input-group">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city"
            />
            <button className="btn btn-outline-secondary" type="button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="btn btn-outline-secondary" type="button">
              <i className="fa-solid fa-location-crosshairs"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
