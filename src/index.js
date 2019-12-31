import React from "react";
import ReactDOM from "react-dom";
import { Schedule } from './components';

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Schedule/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
