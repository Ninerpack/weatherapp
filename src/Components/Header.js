import React, { useState, useContext } from "react";
import axios from "axios";
import Places from "google-places-web";

// importing the context
import { AddressContext } from "../App";

const Header = () => {
  // API KEYS //
  // Open Weather Map API key //
  const OPEN_WEATHER_KEY = '4c9c09da9dd01b0168f894bc925358bd';
  // Google Places API key //
  const PLACES_KEY = "AIzaSyAyoffdXVUVUzlS7BtBiDb9H8f6rnDKHcA";
  Places.apiKey = PLACES_KEY;

  // Using Address Context and pulling the things I need, which in this case are the functions to set the states
  const {
    setHasBeenSearched,

    setCity,
    setTemp,
    setCondition,
    setConditionIcon,

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
        console.log(response);
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
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={alerts}&units=imperial&appid=${OPEN_WEATHER_KEY}`
      )
      .then((res) => {
        console.log(res);
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
      })
      .catch((error) => console.error(`Error: ${error}`));

    setHasBeenSearched(true);
  };

  // const getPlaces = () => {
  //   axios
  //     .get(
  //       `https://maps.googleapis.com/maps/api/place/details/json?place_id=${searchTerm}&fields=photo&key=${PLACES_KEY}`
  //     )
  //     .then((res) => {
  //       console.log("GOOGLE ", res)
  //     })
  //     .catch((error) => console.error(`Error: ${error}`));
  // }


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
            //getPlaces();
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
