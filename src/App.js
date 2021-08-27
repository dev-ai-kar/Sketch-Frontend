import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Draw from "./components/Draw";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Draw />
        <p>Let's classify digits.</p>
      </header>
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
