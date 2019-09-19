import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/home-page";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={HomePage}></Route>
      </Router>
    </div>
  );
}

export default App;
