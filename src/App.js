import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./SCSS/header.scss";

// Main Component that renders all other components \\

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
