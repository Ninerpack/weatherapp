import React from "react";

const OtherInfoCard = ({ propName, propInfo, propInfo2 }) => {

    return (
      <div key={propName} className="Card-big">
        <div className="Card-title">{propName}</div>
        <div className="Card-info">
          {propInfo && propInfo2 ? (
            <div>
              <div>{propInfo}</div>
              <div>{propInfo2}</div>
            </div>
          ) : (
            <div>{propInfo}</div>
          )}
          <div>{/*function*/}</div>
        </div>
      </div>
    );
            
};

export default OtherInfoCard;
