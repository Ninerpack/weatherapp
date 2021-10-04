import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import "./SCSS/Main.scss";

// Main Component that renders all other components \\

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
