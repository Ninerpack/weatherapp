import React from "react";

const OtherInfoCard = ({ propName, propInfo, propInfo2 }) => {

    return (
      <div key={propName} className="card_big">
        <div className="card_title">{propName}</div>
        <div className="card_info">
          {(propInfo && propInfo2) || (propInfo === 0 && propInfo2) ? (
            <div className='prop_body'>
              {<div className="info_1">{propInfo}</div>}
              {<div className="info_2">{propInfo2}</div>}
            </div>
          ) : (
            <div>{propInfo}</div>
          )}
        </div>
      </div>
    );
            
};

export default OtherInfoCard;
