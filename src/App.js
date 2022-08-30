import React from "react";
import Weather from "./Weather";
import "./App.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Weather defaultCity="Courtenay" />
        </div>
        <footer className="github-link">
          Thank you for visiting my React.js weather app!
          <div>
            This project was coded by Chihiro Ismail, and is
            <a
              href="https://github.com/Chihiro-001/weather-app-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              open-sourced on GitHub
            </a>{" "}
            hosted on Netlify.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
