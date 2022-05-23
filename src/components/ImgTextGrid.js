import React from "react";

const ImgTextGrid = ({ gridImg, gridHeader, gridImgInfo }) => {
  return (
    <div className="grid grid-cols-12 p-16">
      <div className="col-span-5">
        <img src={gridImg} alt="" />
      </div>
      <div className="col-span-7 px-14 flex flex-col justify-center">
        <h4 className="text-3xl pb-6 uppercase font-bold">{gridHeader}</h4>
        <p>{gridImgInfo}</p>
      </div>
    </div>
  );
};

export default ImgTextGrid;
