import React, { useContext } from "react";
import { useState } from 'react'
// importing the context
import { AddressContext } from "../App";

const Body = () => {
  // pulling the state from the useState
  const { city, temp, condition, sun, sunCond, mon, monCond, tue, tueCond,
    wed, wedCond, thu, thuCond, fri, friCond, sat, satCond } = useContext(AddressContext);
  

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
  }

  return (
    <div className="Body_container">
      <div className="Body" id="body">
        <div className="Daily-info">
          <div className="City">{city}</div>
          <div className="Temp">{temp}</div>
          <div className="Condition">{condition}</div>
        </div>
        <div className="Info-container">
          <div className="Weekly-info">
            <div className="Card-small">
              <div className="Day">{"Sun"}</div>
              <div className="Icon">
                <img src={getIcon(String(sunCond))} alt="?" />
              </div>
              <div className="Temp">
                {Math.trunc((sun - 273.15) * (9 / 5) + 32)}
              </div>
            </div>
            <div className="Card-small">
              <div className="Day">{"Mon"}</div>
              <div className="Icon">
                <img src={getIcon(String(monCond))} alt="?" />
              </div>
              <div className="Temp">
                {Math.trunc((mon - 273.15) * (9 / 5) + 32)}
              </div>
            </div>
            <div className="Card-small">
              <div className="Day">{"Tue"}</div>
              <div className="Icon">
                <img src={getIcon(String(tueCond))} alt="?" />
              </div>
              <div className="Temp">
                {Math.trunc((tue - 273.15) * (9 / 5) + 32)}
              </div>
            </div>
            <div className="Card-small">
              <div className="Day">{"Wed"}</div>
              <div className="Icon">
                <img src={getIcon(String(wedCond))} alt="?" />
              </div>
              <div className="Temp">
                {Math.trunc((wed - 273.15) * (9 / 5) + 32)}
              </div>
            </div>
            <div className="Card-small">
              <div className="Day">{"Thu"}</div>
              <div className="Icon">
                <img src={getIcon(String(thuCond))} alt="?" />
              </div>
              <div className="Temp">
                {Math.trunc((thu - 273.15) * (9 / 5) + 32)}
              </div>
            </div>
            <div className="Card-small">
              <div className="Day">{"Fri"}</div>
              <div className="Icon">
                <img src={getIcon(String(friCond))} alt="?" />
              </div>
              <div className="Temp">
                {Math.trunc((fri - 273.15) * (9 / 5) + 32)}
              </div>
            </div>
            <div className="Card-small">
              <div className="Day">{"Sat"}</div>
              <div className="Icon">
                <img src={getIcon(String(satCond))} alt="?" />
              </div>
              <div className="Temp">
                {Math.trunc((sat - 273.15) * (9 / 5) + 32)}
              </div>
            </div>
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
