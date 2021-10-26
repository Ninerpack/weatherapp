import React, { useContext } from "react";
// importing the context
import { AddressContext } from "../App";

const Alerts = () => {
    const { firstAlert, secondAlert } = useContext(AddressContext);
  return (
    <div className="alerts_container">
      <div className='alert'>
        {firstAlert ? <div className="info">{<div className="box_1">{firstAlert}</div>}</div> : <div className='info'>{"Currently no weather alerts"}</div>}
        {<div className="info">{<div className="box_1">{secondAlert}</div>}</div>}
      </div>
    </div >
  );
};

export default Alerts;
