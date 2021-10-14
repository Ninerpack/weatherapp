import React, { useState } from "react";
import "./SCSS/Main.scss";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

// AddressContext
export const AddressContext = React.createContext();

// Main Component that renders all other components \\
function App() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [condition, setCondition] = useState("");

  return (
    <div className="App">
      <AddressContext.Provider
        value={{
          city,
          setCity,
          temp,
          setTemp,
          condition,
          setCondition,
        }}
      >
        <Header />
        <Body />
        <Footer />
      </AddressContext.Provider>
    </div>
  );
}

export default App;
