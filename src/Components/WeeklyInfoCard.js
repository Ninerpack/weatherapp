import React from "react";

const WeeklyInfoCard = ({ propName, propIcon, propTemp }) => {
  return (
    <div key={propName} className="card_small">
      <div className="card_title">{propName}</div>
      <div className="icon">
        <img src={propIcon} alt={''} />
      </div>
      <div className="temp">{propTemp ? Math.trunc(propTemp) + "°" : ""}</div>
    </div>
  );
};

export default WeeklyInfoCard;