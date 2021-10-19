import React, { useState, useContext } from "react";
import axios from "axios";

// importing the context
import { AddressContext } from "../App";

const Header = () => {
  // Using Address Context and pulling the things I need, which in this case are the functions to set the states
  const { setCity, setTemp, setCondition, setSun, setSunCond, setMon, setMonCond, setTue,
    setTueCond, setWed, setWedCond, setThu, setThuCond, setFri, setFriCond, setSat, setSatCond, setHasBeenSearched } = useContext(AddressContext);

  // useState
  const [searchTerm, setSearchTerm] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  // api key
  const api_key = "4c9c09da9dd01b0168f894bc925358bd";

  const handleInput = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const getDailyForecast = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=imperial&appid=${api_key}`
      )
      .then((response) => {
        console.log(response);
        setCity(response.data.name);
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
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={alerts}&appid=${api_key}`
      )
      .then((res) => {
        console.log(res); 
        setSun(res.data.daily[0].temp.day);
        setSunCond(res.data.daily[0].weather[0].icon);
        setMon(res.data.daily[1].temp.day);
        setMonCond(res.data.daily[1].weather[0].icon);
        setTue(res.data.daily[2].temp.day);
        setTueCond(res.data.daily[2].weather[0].icon);
        setWed(res.data.daily[3].temp.day);
        setWedCond(res.data.daily[3].weather[0].icon);
        setThu(res.data.daily[4].temp.day);
        setThuCond(res.data.daily[4].weather[0].icon);
        setFri(res.data.daily[5].temp.day);
        setFriCond(res.data.daily[5].weather[0].icon);
        setSat(res.data.daily[6].temp.day);
        setSatCond(res.data.daily[6].weather[0].icon);
      })
    .catch((error) => console.error(`Error: ${error}`));
    
    setHasBeenSearched(true);
  }

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
        <button onClick={() => { getDailyForecast(); getWeeklyForecast();}} id="search_button" type="submit">
          {" "}
          Search
        </button>
      </nav>
    </div>
  );
};

export default Header;
