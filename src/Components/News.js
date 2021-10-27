import React, { useContext } from "react";
// importing the context
import { AddressContext } from "../App";

const News = () => {
    const {firstAlert, secondAlert} = useContext(AddressContext);

    return (
      <div className="news_container">
          {firstAlert && <div className="first_alert">{firstAlert + " | see more ->"}</div>}
          {secondAlert && <div className="second_alert">{secondAlert + " | see more ->"}</div>}
          {!firstAlert && !secondAlert && (
          <div className="no_alert">No Alerts</div>
        )}
      </div>
    );
}

export default News
