import React from "react";

const OtherInfoCard = ({ propName, propInfo, propInfo2 }) => {

    return (
      <div key={propName} className="Card-big">
        <div className="Card-title">{propName}</div>
        <div className="Card-info">
          {(propInfo && propInfo2) || (propInfo === 0 && propInfo2) ? (
            <div className='Prop-body'>
              {<div className="Info-1">{propInfo}</div>}
              {<div className="Info-2">{propInfo2}</div>}
            </div>
          ) : (
            <div>{propInfo}</div>
          )}
        </div>
      </div>
    );
            
};

export default OtherInfoCard;
