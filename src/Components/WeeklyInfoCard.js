import React from "react";

const WeeklyInfoCard = ({ propName, propIcon, propTemp }) => {
  return (
    <div key={propName} className="Card-small">
      <div className="Card-title">{propName}</div>
      <div className="Icon">
        <img src={propIcon} alt={''} />
      </div>
      <div className="Temp">{propTemp ? Math.trunc(propTemp) + "°" : ""}</div>
    </div>
  );
};

export default WeeklyInfoCard;