import React from "react";
import "../App.css";
import { FaBan } from "react-icons/fa";

const MainDog = ({
  dog,
  dogInfo,
  banName,
  banLifeSpan,
  banBreedGroup,
  isBanned,
}) => {
  return (
    <div className="center-container">
      <div className="container">
        <h5 className="card" onClick={banName}>
          Name: {dogInfo.name}
        </h5>
        <h5 className="card" onClick={banLifeSpan}>
          Life span: {dogInfo.life_span}
        </h5>
        <h5 className="card" onClick={banBreedGroup}>
          Breed group: {dogInfo.breed_group}
        </h5>
      </div>
      {isBanned ? (
        <div>
          <h4>Banned! </h4>
          <FaBan className="ban-icon" />
        </div>
      ) : (
        <img className="central-image" src={dog.url} />
      )}
    </div>
  );
};

export default MainDog;
