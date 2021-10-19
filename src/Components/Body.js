import React, { useContext } from "react";
import { useState } from 'react'
// importing the context
import { AddressContext } from "../App";

const Body = () => {
  // pulling the state from the useState
  const { city, temp, condition, sun, sunCond, mon, monCond, tue, tueCond,
    wed, wedCond, thu, thuCond, fri, friCond, sat, satCond, hasBeenSearched } = useContext(AddressContext);

  const getIcon = (cond) => {
    if (cond === "01d") return "01d@2x.png";
    else if (cond === "02d") return "02d@2x.png";
    else if (cond === "03d") return "03d@2x.png";
    else if (cond === "04d") return "04d@2x.png";
    else if (cond === "09d") return "09d@2x.png";
    else if (cond === "10d") return "10d@2x.png";
    else if (cond === "11d") return "11d@2x.png";
    else if (cond === "13d") return "13d@2x.png";
    else if (cond === "50d") return "50d@2x.png";
  };
  
  const daysArray = [
    { dayLabel: "Sun", condIcon: getIcon(String(sunCond)), temp: sun },
    { dayLabel: "Mon", condIcon: getIcon(String(monCond)), temp: mon },
    { dayLabel: "Tue", condIcon: getIcon(String(tueCond)), temp: tue },
    { dayLabel: "Wed", condIcon: getIcon(String(wedCond)), temp: wed },
    { dayLabel: "Thu", condIcon: getIcon(String(thuCond)), temp: thu },
    { dayLabel: "Fri", condIcon: getIcon(String(friCond)), temp: fri },
    { dayLabel: "Sat", condIcon: getIcon(String(satCond)), temp: sat },
  ];

  return (
    <div className="Body_container">
      <div className="Body" id="body">
        <div className="Daily-info">
          <div className="City">{city}</div>
          <div className="Temp">{Math.trunc(temp) + "°"}</div>
          <div className="Condition">{condition}</div>
        </div>
        <div className="Info-container">
          <div className="Weekly-info">
            {hasBeenSearched &&
              daysArray.map((item) => (
                <div key={item.dayLabel} className="Card-small">
                  <div className="Day">{item.dayLabel}</div>
                  <div className="Icon">
                    <img src={item.condIcon} alt={item.condIcon} />
                  </div>
                  <div className="Temp">
                    {Math.trunc((item.temp - 273.15) * (9 / 5) + 32) + "°"}
                  </div>
                </div>
              ))}
          </div>
          <div className="Other-info">
            <div className="Card-big">{""}</div>
            <div className="Card-big">{""}</div>
            <div className="Card-big">{""}</div>
            <div className="Card-big">{""}</div>
            <div className="Card-big">{""}</div>
            <div className="Card-big">{""}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body
