import React, { useContext } from "react";
// importing the context
import { AddressContext } from "../App";
import CurrentWeather from "./CurrentWeather";
import OtherInfoCard from "./OtherInfoCard";
import WeeklyInfoCard from "./WeeklyInfoCard";

const Body = () => {
  // pulling the state from the useState
  const {
    hasBeenSearched,

    city,
    temp,
    condition,
    conditionIcon,

    sunTemp,
    monTemp,
    tueTemp,
    wedTemp,
    thuTemp,
    friTemp,
    satTemp,

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
    visibility,
    feelsLike,
  } = useContext(AddressContext);

  const getIcon = (cond) => {
    // day
    if (cond === "01d") return "01d@2x.png";
    else if (cond === "02d") return "02d@2x.png";
    else if (cond === "03d") return "03d@2x.png";
    else if (cond === "04d") return "04d@2x.png";
    else if (cond === "09d") return "09d@2x.png";
    else if (cond === "10d") return "10d@2x.png";
    else if (cond === "11d") return "11d@2x.png";
    else if (cond === "13d") return "13d@2x.png";
    else if (cond === "50d") return "50d@2x.png";
    // night
    else if (cond === "01n") return "01n@2x.png";
    else if (cond === "02n") return "02n@2x.png";
    else if (cond === "03n") return "03n@2x.png";
    else if (cond === "04n") return "04n@2x.png";
    else if (cond === "09n") return "09n@2x.png";
    else if (cond === "10n") return "10n@2x.png";
    else if (cond === "11n") return "11n@2x.png";
    else if (cond === "13n") return "13n@2x.png";
    else if (cond === "50n") return "50n@2x.png";
  };

  const getCurrentIcon = () => {
  // day
    if (conditionIcon === "01d") return "01d@4x.png";
    else if (conditionIcon === "02d") return "02d@4x.png";
    else if (conditionIcon === "03d") return "03d@4x.png";
    else if (conditionIcon === "04d") return "04d@4x.png";
    else if (conditionIcon === "09d") return "09d@4x.png";
    else if (conditionIcon === "10d") return "10d@4x.png";
    else if (conditionIcon === "11d") return "11d@4x.png";
    else if (conditionIcon === "13d") return "13d@4x.png";
    else if (conditionIcon === "50d") return "50d@4x.png";
    // night
    else if (conditionIcon === "01n") return "01n@4x.png";
    else if (conditionIcon === "02n") return "02n@4x.png";
    else if (conditionIcon === "03n") return "03n@4x.png";
    else if (conditionIcon === "04n") return "04n@4x.png";
    else if (conditionIcon === "09n") return "09n@4x.png";
    else if (conditionIcon === "10n") return "10n@4x.png";
    else if (conditionIcon === "11n") return "11n@4x.png";
    else if (conditionIcon === "13n") return "13n@4x.png";
    else if (conditionIcon === "50n") return "50n@4x.png";
  }

  const currentDay = 
    {
      city: city,
      icon: getCurrentIcon(),
      temp: temp,
      condition: condition,
    };

  const daysArray = [
    {
      dayLabel: "Sun",
      condIcon: getIcon(String(sunCond)),
      temp: sunTemp,
    },
    {
      dayLabel: "Mon",
      condIcon: getIcon(String(monCond)),
      temp: monTemp,
    },
    {
      dayLabel: "Tue",
      condIcon: getIcon(String(tueCond)),
      temp: tueTemp,
    },
    {
      dayLabel: "Wed",
      condIcon: getIcon(String(wedCond)),
      temp: wedTemp,
    },
    {
      dayLabel: "Thu",
      condIcon: getIcon(String(thuCond)),
      temp: thuTemp,
    },
    {
      dayLabel: "Fri",
      condIcon: getIcon(String(friCond)),
      temp: friTemp,
    },
    {
      dayLabel: "Sat",
      condIcon: getIcon(String(satCond)),
      temp: satTemp,
    },
  ];

  // takes in number for humidity and returns a status level
  const humidityLevel = () => {
    if (humidity >= 70 || humidity < 30) return "Poor";
    else if (
      (humidity >= 60 && humidity < 70) ||
      (humidity >= 25 && humidity < 30)
    )
      return "Fair";
    else if (humidity >= 30 && humidity < 60) return "Healthy";
  };

  // takes in number for visibilty and returns a status level
  const visibilityLevel = () => {
    return Math.trunc(visibility * 0.000621371192237) + " miles";
  };

  // takes in number for visibilty and returns a status level
  const uvIndexLevel = () => {
    if (uvIndex < 3) return "Low";
    else if (uvIndex >= 3 || uvIndex <= 5) return "Medium";
    else if (uvIndex >= 6 && uvIndex <= 7) return "High";
    else if (uvIndex >= 8 && uvIndex <= 10) return "Very High";
    else if (uvIndex >= 11) return "Extremely High";
  };

  // converting unix number into local time
  const getSunrise = (rise) => {
    var options = { timeZone: "America/Los_Angeles", timeZoneName: "short" };
    const time = new Date(rise * 1000).toLocaleTimeString("en-US", options);
    return String(time).slice(0, 4) + " PM";
  };
  const getSunset = (set) => {
    var options = { timeZone: "America/Los_Angeles", timeZoneName: "short" };
    const time = new Date(set * 1000).toLocaleTimeString("en-US", options);
    return String(time).slice(0, 4) + " AM";
  };

  const getTime = () => {
    var time = new Date();
    var hour = time.getHours();
    hour = ((hour + 11) % 12 + 1);
    var minute = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
    return hour + ':' + minute;
  }

  const getDay = () => {
    var day = new Date();
    var current = day.getDay()

    if (current === 1) return "Monday";
    else if (current === 2) return "Tuesday";
    else if (current === 3) return "Wednesday";
    else if (current === 4) return "Thursday";
    else if (current === 5) return "Friday";
    else if (current === 6) return "Saturday";
    else if (current === 7) return "Sunday";
  }

  return (
    <div className="body_container">
      {/* BODY */}
      <div className="body" id="body">
        {/* DAILY/CURRENT INFO */}
        <CurrentWeather
          cityProp={currentDay.city}
          iconProp={currentDay.icon}
          tempProp={currentDay.temp}
          dayProp={getDay()}
          timeProp={getTime()}
          conditionProp={currentDay.condition}
        />

        {/* INFO CONTAINER */}
        <div className="info_container">
          <div className="info_title_top">Today / Week</div>
          {/*///////// WEEKLY INFO //////////////*/}
          <div className="weekly_info">
            {hasBeenSearched
              ? daysArray.map((item) => (
                  <WeeklyInfoCard
                    key={item.dayLabel}
                    propName={item.dayLabel}
                    propIcon={item.condIcon}
                    propTemp={item.temp}
                  />
                ))
              : daysArray.map((item) => (
                  <WeeklyInfoCard
                    key={item.dayLabel}
                    propName={""}
                    propIcon={""}
                    propTemp={""}
                  />
                ))}
          </div>

          <div className="info_title_bottom">Today's Highlights</div>
          {/*///////////// OTHER INFO /////////////*/}
          <div className="other_info">
            {/* Card 1 */}
            {hasBeenSearched ? (
              <OtherInfoCard
                propName={"UV Index"}
                propInfo={uvIndex}
                propInfo2={uvIndexLevel()}
              />
            ) : (
              <OtherInfoCard />
            )}

            {/* Card 2 */}
            {hasBeenSearched ? (
              <OtherInfoCard
                propName={"Wind Status"}
                propInfo={Math.trunc(windStatus) + " mph"}
              />
            ) : (
              <OtherInfoCard />
            )}

            {/* Card 3 */}
            {hasBeenSearched ? (
              <OtherInfoCard
                propName={"Sunrise & Sunset"}
                propInfo={getSunset(set)}
                propInfo2={getSunrise(rise)}
              />
            ) : (
              <OtherInfoCard />
            )}

            {/* Card 4 */}
            {hasBeenSearched ? (
              <OtherInfoCard
                propName={"Humidity"}
                propInfo={humidity}
                propInfo2={humidityLevel()}
              />
            ) : (
              <OtherInfoCard />
            )}

            {/* Card 5 */}
            {hasBeenSearched ? (
              <OtherInfoCard
                propName={"Visibility"}
                propInfo={visibilityLevel()}
              />
            ) : (
              <OtherInfoCard />
            )}

            {/* Card 6 */}
            {hasBeenSearched ? (
              <OtherInfoCard
                propName={"Feels Like"}
                propInfo={Math.trunc(feelsLike) + "°"}
              />
            ) : (
              <OtherInfoCard />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body
