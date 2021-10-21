import React, { useState } from "react";
import "./SCSS/Main.scss";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

// AddressContext
export const AddressContext = React.createContext();

// Main Component that renders all other components \\
function App() {
  const [hasBeenSearched, setHasBeenSearched] = useState(false);
  // Main info searched
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(0);
  const [condition, setCondition] = useState("");
  const [conditionIcon, setConditionIcon] = useState("");

  // Weekly info from searched
  const [sunTemp, setSunTemp] = useState(0);
  const [monTemp, setMonTemp] = useState(0);
  const [tueTemp, setTueTemp] = useState(0);
  const [wedTemp, setWedTemp] = useState(0);
  const [thuTemp, setThuTemp] = useState(0);
  const [friTemp, setFriTemp] = useState(0);
  const [satTemp, setSatTemp] = useState(0);
  const [sunCond, setSunCond] = useState("");
  const [monCond, setMonCond] = useState("");
  const [tueCond, setTueCond] = useState("");
  const [wedCond, setWedCond] = useState("");
  const [thuCond, setThuCond] = useState("");
  const [friCond, setFriCond] = useState("");
  const [satCond, setSatCond] = useState("");

  // Other info from searched
  const [uvIndex, setUvIndex] = useState(0);
  const [windStatus, setWindStatus] = useState(0);
  const [rise, setRise] = useState(0);
  const [set, setSet] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [visibility, setVisibility] = useState(0);
  const [rainChance, setRainChance] = useState(0);

  return (
    <div className="App">
      <AddressContext.Provider
        value={{
          hasBeenSearched, setHasBeenSearched,

          city, setCity,
          temp, setTemp,
          condition, setCondition,
          conditionIcon, setConditionIcon,

          sunTemp, setSunTemp,
          monTemp, setMonTemp,
          tueTemp, setTueTemp,
          wedTemp, setWedTemp,
          thuTemp, setThuTemp,
          friTemp, setFriTemp,
          satTemp, setSatTemp,

          sunCond, setSunCond,
          monCond, setMonCond,
          tueCond, setTueCond,
          wedCond, setWedCond,
          thuCond, setThuCond,
          friCond, setFriCond,
          satCond, setSatCond,

          uvIndex, setUvIndex,
          windStatus, setWindStatus,
          rise, setRise,
          set, setSet,
          humidity, setHumidity,
          visibility, setVisibility,
          rainChance, setRainChance
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
