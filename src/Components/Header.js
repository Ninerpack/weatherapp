import React, { useState, useContext } from "react";
import axios from "axios";

// importing the context
import { AddressContext } from "../App";

const Header = () => {
  // Using Address Context and pulling the things I need, which in this case are the functions to set the states
  const { setCity, setTemp, setCondition } = useContext(AddressContext);

  // useState
  const [searchTerm, setSearchTerm] = useState("");

  // api key
  const api_key = "0a7f8003b0cb4b2993514953210610";

  const handleInput = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const getData = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${searchTerm}&aqi=yes`
      )
      .then((response) => {
        const cityName = response.data.location.name;
        const temp = response.data.current.temp_f;
        const weatherCondition = response.data.current.condition.text;

        setCity(cityName);
        setTemp(temp);
        setCondition(weatherCondition);
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
          placeholder="Search Cities"
          className="Search"
        ></input>
        {/* this will call your api whatever the input value is */}
        <button onClick={() => getData()} id="search_button" type="submit">
          {" "}
          Search
        </button>
      </nav>
    </div>
  );
};

export default Header;
