import React, { useState, useEffect } from "react";
import "../index.css";

import ImgTextGrid from "../components/ImgTextGrid";
import Card from "../components/Card";

const Home = () => {
  const [apod, setApod] = useState("");
  const [rover, setRover] = useState([]);

  console.log(rover);

  //Making use of useEffect hook to fetch APOD img
  useEffect(() => {
    const imgOfTheDay = fetch("https://api.nasa.gov/planetary/apod?api_key=");
    imgOfTheDay
      .then((Response) => Response.json())
      .then((data) => {
        setApod(data);
      });
  }, []);

  //Making use of useEffect hook to fetch mars rover imgs
  useEffect(() => {
    const roverPhotos = fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key="
    );

    roverPhotos
      .then((Response) => Response.json())

      .then((data) => {
        const roverPhotos = data.photos;
        setRover(roverPhotos.slice(1, 4));
      });
  }, []);

  return (
    //HERO
    <div className="bg-black">
      <div className="home text-white flex flex-col justify-center text-left ">
        <div className="home__content__container pl-24 w-4/5">
          <h3 className="text-5xl uppercase font-bold leading-tight">
            One small Step for man,
            <br />
            one giant leap for man kind
          </h3>
          <p className="text-2xl py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <button className="text-base my-5">Go to space</button>
        </div>
      </div>

      <div className="image__of__day bg-black text-white">
        <h4 className="text-center text-blue text-4xl font-bold uppercase pt-12">
          Astronomy picture of the day
        </h4>
        <ImgTextGrid
          gridImg={apod.hdurl}
          gridHeader={apod.title}
          gridImgInfo={apod.explanation}
        />
      </div>

      <div className="container bg-black text-white mx-auto py-12">
        <h4 className="text-center text-blue text-4xl font-bold uppercase py-12">
          Photos from the mars rover
        </h4>
        <div className="grid grid-cols-3 gap-6 place-content-center">
          {rover.map((rvr) => {
            return (
              <div className="grid-span-1 ">
                <Card
                  roverImg={rvr.img_src}
                  roverName={`Rover name: ${rvr.rover.name}`}
                  roverLandingDate={`Landing date: ${rvr.rover.landing_date}`}
                  roverStatus={`Rover Status: ${rvr.rover.status}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
