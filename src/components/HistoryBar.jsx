import React from "react";
import "../App.css";

const HistoryBar = ({ dogHistory }) => {
  return (
    <div className="left-sidebar">
      <h4>History</h4>
      <div className="dog-history">
        {dogHistory.map((dog, index) => (
          <div key={index}>
            <h5>
              {dog.name.length > 10
                ? `${dog.name.substring(0, 7)}...`
                : dog.name}
            </h5>
            <img className="small-image" src={dog.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryBar;
