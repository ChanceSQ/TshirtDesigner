import React from "react";
import "./App.css";
import CanvasHandler from "./components/CanvasHandler";

function App() {
  return (
    <div className="App">
      <div id="fabric-canvas">
        <CanvasHandler />
      </div>
    </div>
  );
}

export default App;
