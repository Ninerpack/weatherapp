import React from "react";
import { useState } from "react";
import "./SCSS/Main.scss";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
// Main Component that renders all other components \\

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm} />
      <Body searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default App;
