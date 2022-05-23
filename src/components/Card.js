import React from "react";

const Card = ({ roverImg, roverLandingDate, roverName, roverStatus }) => {
  return (
    <div className="bg-white text-black rounded-md shadow-lg max-w-sm ">
      <div className="p-8">
        <p className="text-2xl font-bold">{roverName}</p>
        <p>{roverLandingDate}</p>
        <p>{roverStatus}</p>
      </div>
      <img src={roverImg} className="rounded-b-md" />
    </div>
  );
};

export default Card;
