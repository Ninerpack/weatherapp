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
    <div className="daily_info">
      { hasBeenSearched &&
        <>
          <div className="city">{cityProp}</div>
          <div className="weather_img">
            <img src={iconProp} alt={""} />
          </div>
          <div className="temp">{Math.trunc(tempProp) + "°"}</div>
          <div className="date_time">
            <span>{dayProp + ", "}</span>
            <span>{timeProp}</span>
          </div>
          <div className="spacer"></div>
          <div className="condition">{conditionProp}</div>
          <News />
        </>
      }
    </div>
  );
};

export default CurrentWeather;
