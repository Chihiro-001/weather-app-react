import React from "react";
import Input from "./Input";
import Current from "./Current";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="weather-app today">
        <Input />
        <Current />
      </div>
    </div>
  );
}

export default App;
