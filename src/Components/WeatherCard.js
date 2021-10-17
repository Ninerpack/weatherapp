import React, { useContext } from "react";

// importing the context
import { AddressContext } from "../App";

const WeatherCard = () => {
  // pulling the state from the useState
  const { city, temp, condition } = useContext(AddressContext);

  return (
    <div className="Card">
      <p className="Name">{city}</p>
      <p className="Temp">{temp}</p>
      <p className="Type">{condition}</p>
    </div>
  );
};

export default WeatherCard;
