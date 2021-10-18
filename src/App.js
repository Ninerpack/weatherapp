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
  const [sun, setSun] = useState("");
  const [sunCond, setSunCond] = useState("");
  const [mon, setMon] = useState("");
  const [monCond, setMonCond] = useState("");
  const [tue, setTue] = useState("");
  const [tueCond, setTueCond] = useState("");
  const [wed, setWed] = useState("");
  const [wedCond, setWedCond] = useState("");
  const [thu, setThu] = useState("");
  const [thuCond, setThuCond] = useState("");
  const [fri, setFri] = useState("");
  const [friCond, setFriCond] = useState("");
  const [sat, setSat] = useState("");
  const [satCond, setSatCond] = useState("");

  return (
    <div className="App">
      <AddressContext.Provider
        value={{
          city, setCity,
          temp, setTemp,
          condition, setCondition,
          sun, setSun,
          sunCond, setSunCond,
          mon, setMon,
          monCond, setMonCond,
          tue, setTue,
          tueCond, setTueCond,
          wed, setWed,
          wedCond, setWedCond,
          thu, setThu,
          thuCond, setThuCond,
          fri, setFri,
          friCond, setFriCond,
          sat, setSat,
          satCond, setSatCond,
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
