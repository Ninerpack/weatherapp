import React, { useContext } from "react";
// importing the context
import { AddressContext } from "../App";

const Alerts = () => {
    const { firstAlert, secondAlert } = useContext(AddressContext);
  return (
    <div className="alerts_container">
      <div className="alerts">{<div className="box_1">{firstAlert}</div>}</div>
      <div className="alerts">{<div className="box_1">{secondAlert}</div>}</div>
    </div>
  );
};

export default Alerts;
