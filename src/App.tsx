import React from "react";
import "leaflet/dist/leaflet.css";
import WhatToDo from "./pages/WhatToDo";
import OptionProvider from "./context/OptionContext";

function App() {
  return (
    <OptionProvider>
      <div className="App">
        <WhatToDo />
      </div>
    </OptionProvider>
  );
}

export default App;
