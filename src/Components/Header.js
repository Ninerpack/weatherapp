import React, { useState, useContext } from "react";
import axios from "axios";

// importing the context
import { AddressContext } from "../App";

const Header = () => {
  // API KEYS //
  // Open Weather Map API key //
  const OPEN_WEATHER_KEY = '4c9c09da9dd01b0168f894bc925358bd';

  // Using Address Context and pulling the things I need, which in this case are the functions to set the states
  const {
    setHasBeenSearched,

    setCity,
    setTemp,
    setCondition,
    setConditionIcon,
    setFirstAlert,
    setSecondAlert,

    setSunTemp,
    setMonTemp,
    setTueTemp,
    setWedTemp,
    setThuTemp,
    setFriTemp,
    setSatTemp,

    setSunCond,
    setMonCond,
    setTueCond,
    setWedCond,
    setThuCond,
    setFriCond,
    setSatCond,

    setUvIndex,
    setWindStatus,
    setRise,
    setSet,
    setHumidity,
    setVisibility,
    setRainChance,
  } = useContext(AddressContext);

  // useState
  const [searchTerm, setSearchTerm] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const handleInput = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const getDailyForecast = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=imperial&appid=${OPEN_WEATHER_KEY}`
      )
      .then((response) => {
    
        // Getting main display data
        setCity(response.data.name);
        setConditionIcon(response.data.weather[0].icon);
        setTemp(response.data.main.temp);
        setCondition(response.data.weather[0].main);
        setLat(response.data.coord.lat);
        setLon(response.data.coord.lon);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const getWeeklyForecast = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_KEY}`
      )
      .then((res) => {
        // Getting weekly data
        setSunTemp(res.data.daily[0].temp.day);
        setMonTemp(res.data.daily[1].temp.day);
        setTueTemp(res.data.daily[2].temp.day);
        setWedTemp(res.data.daily[3].temp.day);
        setThuTemp(res.data.daily[4].temp.day);
        setFriTemp(res.data.daily[5].temp.day);
        setSatTemp(res.data.daily[6].temp.day);

        // Getting other info data
        // Top info
        setSunCond(res.data.daily[0].weather[0].icon);
        setMonCond(res.data.daily[1].weather[0].icon);
        setTueCond(res.data.daily[2].weather[0].icon);
        setWedCond(res.data.daily[3].weather[0].icon);
        setThuCond(res.data.daily[4].weather[0].icon);
        setFriCond(res.data.daily[5].weather[0].icon);
        setSatCond(res.data.daily[6].weather[0].icon);

        //Bottom info
        setUvIndex(res.data.current.uvi);
        setWindStatus(res.data.current.wind_speed);
        setRise(res.data.current.sunrise);
        setSet(res.data.current.sunset);
        setHumidity(res.data.current.humidity);
        setVisibility(res.data.current.visibility);
        setRainChance(res.data.daily[0].pop);

        setFirstAlert(res.data.alerts[0].event);
        setSecondAlert(res.data.alerts[1].event);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };


  return (
    <div className="Header">
      Weather
      <nav className="Nav">
        <input
          type="text"
          onChange={handleInput}
          placeholder="Enter zip code"
          className="Search"
        ></input>
        {/* this will call your api whatever the input value is */}
        <button
          onClick={() => {
            getDailyForecast();
            getWeeklyForecast();
            setHasBeenSearched(true);
          }}
          id="search_button"
          type="submit"
        >
          {" "}
          Search
        </button>
      </nav>
    </div>
  );
};

export default Header;
