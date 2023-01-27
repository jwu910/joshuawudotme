import React from "react";
import "./App.scss";
// import github from "./assets/github.png";
// import linkedin from "./assets/linkedin.png";
import profile from "./assets/profile.jpg";
import logo from "./assets/wu_logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-content">
        <img src={profile} className="App-profile" alt="profile" />
      </section>
    </div>
  );
}

export default App;
