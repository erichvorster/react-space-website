import React from "react";

const ImgTextGrid = ({ gridImg, gridHeader, gridImgInfo }) => {
  return (
    <div className="grid grid-cols-12 px-28 gap-6">
      <div className="col-span-5 pt-20 px-2">
        <h5 className="py-3 uppercase font-semibold text-md">
          <span className="text-green">01 / </span> Nasa Image of the Day
        </h5>
        <h3 className="text-4xl tracking-widest font-bold">
          Nasa's Astronomy Image of the Day
        </h3>
        <h4 className="text-3xl pt-8 pb-6 font-bold text-blue">{gridHeader}</h4>
      </div>
      <div className="col-span-7">
        <div>
          <img src={gridImg} alt="" />
        </div>
        <div className="flex flex-col justify-center pt-14">
          <p>{gridImgInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default ImgTextGrid;
