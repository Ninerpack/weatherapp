import React, { useState, useContext } from "react";
// importing the context
import { AddressContext } from "../App";

const News = () => {
      const {hasBeenSearched, firstAlert, secondAlert} = useContext(AddressContext);

    return (
      <div className="news_container">
        <div>{hasBeenSearched? "Alert 1:" + firstAlert : "No alerts"}</div>
        <div>{hasBeenSearched? "Alert 2:" + secondAlert : "No alerts"}</div>
      </div>
    );
}

export default News
