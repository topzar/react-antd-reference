import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "@routes";
import "./App.less";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
