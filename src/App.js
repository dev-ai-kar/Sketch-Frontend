import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Draw from "./components/Draw";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Let's classify digits.</p>
        <Draw />
      </header>
    </div>
  );
}

export default App;
