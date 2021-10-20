import React, { useContext } from "react";
import { useState } from 'react'
// importing the context
import { AddressContext } from "../App";
import OtherInfoCard from "./OtherInfoCard";

const Body = () => {
  // pulling the state from the useState
  const {
    hasBeenSearched,

    city,
    temp,
    condition,

    sun,
    mon,
    tue,
    wed,
    thu,
    fri,
    sat,

    sunCond,
    monCond,
    tueCond,
    wedCond,
    thuCond,
    friCond,
    satCond,

    uvIndex,
    windStatus,
    rise,
    set,
    humidity,
    visibilty,
    rainChance,
  } = useContext(AddressContext);

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
    {
      dayLabel: "Sun",
      condIcon: getIcon(String(sunCond)),
      temp: sun
    },
    {
      dayLabel: "Mon",
      condIcon: getIcon(String(monCond)),
      temp: mon
    },
    {
      dayLabel: "Tue",
      condIcon: getIcon(String(tueCond)),
      temp: tue
    },
    {
      dayLabel: "Wed",
      condIcon: getIcon(String(wedCond)),
      temp: wed
    },
    {
      dayLabel: "Thu",
      condIcon: getIcon(String(thuCond)),
      temp: thu
    },
    {
      dayLabel: "Fri",
      condIcon: getIcon(String(friCond)),
      temp: fri
    },
    {
      dayLabel: "Sat",
      condIcon: getIcon(String(satCond)),
      temp: sat
    },
  ];

  // takes in number for humidity and returns a status level
  const humidityLevel = (humidity) => {
    if (humidity >= 70 || humidity < 30) return "Poor";
    else if (
      (humidity >= 60 && humidity < 70) ||
      (humidity >= 25 && humidity < 30)
    )
      return "Fair";
    else if (humidity >= 30 && humidity < 60) return "Healthy";
  };

  // takes in number for visibilty and returns a status level
  const visibiltyLevel = (visibilty) => {
    if (visibilty >= 0 && visibilty <= 50) return "10+ miles";
    else if (visibilty >= 51 && visibilty <= 150) return "5-10 miles";
    else if (visibilty >= 151 && visibilty <= 200) return "1.5-2.5 miles";
    else if (visibilty >= 201 && visibilty <= 300) return "1-1.25 miles";
    else if (visibilty >= 301 && visibilty <= 500) return "< 0.75 miles";
  };

  // takes in number for visibilty and returns a status level
  const uvIndexLevel = (uvIndex) => {
    if (uvIndex === 1 || uvIndex === 2) return "Low";
    else if (uvIndex >= 3 || uvIndex <= 5) return "Medium";
    else if (uvIndex >= 6 && uvIndex <= 7) return "High";
    else if (uvIndex >= 8 && uvIndex <= 10) return "Very High";
    else if (uvIndex >= 11) return "Extremely High";
  };

  const dayHighlightsArray = [
    {
      cardLabel: "UV Index",
      uvInfo: { uvIndex },
      uvIndexLevel: uvIndexLevel(uvIndex)
    },
    {
      cardLabel: "Wind Status",
      windInfo: { windStatus }
    },
    {
      cardLabel: "Sunrise & Sunset",
      sunriseInfo: { rise },
      sunsetInfo: { set },
    },
    {
      cardLabel: "Humidity",
      humidityInfo: { humidity },
      humidityLevel: humidityLevel(humidity),
    },
    {
      cardLabel: "Visibility",
      visibiltyInfo: { visibilty },
      visibiltyLevel: visibiltyLevel(visibilty),
    },
    {
      cardLabel: "Chance of Rain",
      rainInfo: { rainChance }
    },
  ];

  // converting unix number into local time 
  const getSunrise = (rise) => {
    const time = new Date(rise).toLocaleTimeString("en-US");
    return String(time).slice(0,4) + " PM";
  }
  const getSunset = (set) => {
      const time = new Date(set).toLocaleTimeString("en-US");
      return String(time).slice(0, 4) + " AM";
   }

  return (
    <div className="Body_container">
      <div className="Body" id="body">
        <div className="Daily-info">
          <div className="City">{city}</div>
          <div className="Temp">{Math.trunc(temp) + "°"}</div>
          <div className="Condition">{condition}</div>
        </div>
        <div className="Info-container">
          <div className="Info-title-top">Today / Week</div>
          <div className="Weekly-info">
            {hasBeenSearched ?
              (
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
              ))) : daysArray.map(() => (<div className='Card-small'/>))}
          </div>

          <div className="Info-title-bottom">Today's Highlights</div>
          <div className="Other-info">
            {hasBeenSearched ? <OtherInfoCard propName={"UV Index"} propInfo={uvIndex} propInfo2={uvIndexLevel(uvIndex)}/> : <OtherInfoCard />}
            {hasBeenSearched ? <OtherInfoCard propName={"Wind Status"} propInfo={windStatus} /> : <OtherInfoCard />}
            {hasBeenSearched ? <OtherInfoCard propName={"Sunrise & Sunset"} propInfo={getSunrise(rise)} propInfo2={getSunset(set)} /> : <OtherInfoCard />}
            {hasBeenSearched ? <OtherInfoCard propName={"Humidity"} propInfo={humidity} propInfo2={humidityLevel(humidity)}/> : <OtherInfoCard />}
            {hasBeenSearched ? <OtherInfoCard propName={"Visibility"} propInfo={visibilty} propInfo2={visibiltyLevel(visibilty)}/> : <OtherInfoCard />}
            {hasBeenSearched ? <OtherInfoCard propName={"Chance of rain"} propInfo={rainChance} /> : <OtherInfoCard />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body
