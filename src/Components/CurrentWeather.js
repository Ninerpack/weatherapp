import React, { useContext } from "react";
// importing the context
import { AddressContext } from "../App";
import News from "./News";

const CurrentWeather = ({
  cityProp,
  iconProp,
  tempProp,
  dayProp,
  timeProp,
  conditionProp,
}) => {
  const { hasBeenSearched } = useContext(AddressContext);
  return (
    <div className="Daily-info">
      { hasBeenSearched &&
        <>
          <div className="City">{cityProp}</div>
          <div className="weather-img">
            <img src={iconProp} alt={""} />
          </div>
          <div className="Temp">{Math.trunc(tempProp) + "°"}</div>
          <div className="Date-time">
            <span>{dayProp + ", "}</span>
            <span>{timeProp}</span>
          </div>
          <div className="spacer"></div>
          <div className="Condition">{conditionProp}</div>
          <News />
        </>
      }
    </div>
  );
};

export default CurrentWeather;
