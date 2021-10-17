import React, { useContext } from "react";
import { useState } from 'react'
// importing the context
import { AddressContext } from "../App";

const Body = () => {
  // pulling the state from the useState
  const { city, temp, condition } = useContext(AddressContext);

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
            <div className="Card-small">{"Sun"}</div>
            <div className="Card-small">{"Mon"}</div>
            <div className="Card-small">{"Tue"}</div>
            <div className="Card-small">{"Wed"}</div>
            <div className="Card-small">{"Thur"}</div>
            <div className="Card-small">{"Fri"}</div>
            <div className="Card-small">{"Sat"}</div>
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
