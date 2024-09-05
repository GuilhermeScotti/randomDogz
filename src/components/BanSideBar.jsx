import React from "react";
import "../App.css";

const BanSideBar = ({
  banedNames,
  setBanedNames,
  banedLifeSpans,
  setBanedLifeSpans,
  banedBreedGroups,
  setBanedBreedGroups,
}) => {
  return (
    <div className="right-sidebar">
      <h4>Bans</h4>
      <div>
        <h5>Names</h5>
        {banedNames.map((name, index) => (
          <h6
            className="card"
            key={index}
            onClick={() => {
              setBanedNames(
                banedNames.filter((banedName) => banedName !== name)
              );
            }}
          >
            {name}
          </h6>
        ))}
      </div>
      <div>
        <h5>Life spans</h5>
        {banedLifeSpans.map((lifeSpan, index) => (
          <h6
            className="card"
            key={index}
            onClick={() => {
              setBanedLifeSpans(
                banedLifeSpans.filter(
                  (banedLifeSpan) => banedLifeSpan !== lifeSpan
                )
              );
            }}
          >
            {lifeSpan}
          </h6>
        ))}
      </div>
      <div>
        <h5>Breed Groups</h5>
        {banedBreedGroups.map((breedGroup, index) => (
          <h6
            className="card"
            key={index}
            onClick={() => {
              setBanedBreedGroups(
                banedBreedGroups.filter(
                  (banedBreedGroup) => banedBreedGroup !== breedGroup
                )
              );
            }}
          >
            {breedGroup}
          </h6>
        ))}
      </div>
    </div>
  );
};

export default BanSideBar;
