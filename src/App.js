import React from "react";
import Input from "./Input";
import Current from "./Current";
import "./App.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="weather-app today">
          <Input />
          <Current />
        </div>
      </div>
    </div>
  );
}

export default App;
