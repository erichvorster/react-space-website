import React, { useState, useEffect, useRef } from "react";
import "../index.css";
import marsImg from "../assets/mars.jpg";
import astronaut from "../assets/astronaut.png";

import ImgTextGrid from "../components/ImgTextGrid";
import Card from "../components/Card";
import Accordion from "../components/Accordion";
import Table from "../components/Table";

const Home = () => {
  const [apod, setApod] = useState("");
  const [launchData, setLaunchData] = useState([]);
  const [asteroidData, setAsteroidData] = useState([]);

  //Making use of useEffect hook to fetch APOD img

  ////////CAN YOU PUT MULTIPLE API CALLS INSIDE A USEeFFECT
  useEffect(() => {
    const imgOfTheDay = fetch(
      "https://api.nasa.gov/planetary/apod?api_key=UcBjXa4Tv5NEWdEYSBc31FNsoDMqjdy1CNPfMmYx"
    );
    imgOfTheDay
      .then((Response) => Response.json())
      .then((data) => {
        setApod(data);
      });
  }, []);

  //Making use of the useEffect hook to fetch spaceX launch history

  useEffect(() => {
    const spaceXLaunches = fetch("https://api.spacexdata.com/v3/launches");

    spaceXLaunches
      .then((Response) => Response.json())

      .then((data) => {
        setLaunchData(data.slice(5, 12));
      });
  }, []);

  // Making use of useEffect hook to fetch DONKI data from nasa

  useEffect(() => {
    const asteroidData = fetch(
      "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=UcBjXa4Tv5NEWdEYSBc31FNsoDMqjdy1CNPfMmYx"
    );

    asteroidData.then((response) => response.json()).then((data) => {
      let info = data.near_earth_objects
      setAsteroidData( info[Object.keys(info)[0].slice(0,100)])
    })
  }, []);

  return (
    //HERO
    <div className="bg-white relative">
      <div className="home text-white flex flex-col justify-center text-left ">
        <div className="home__content__container pl-28 w-4/5 pt-32">
          <h3 className="text-7xl font-bold leading-tight">
            To Infinity and <span className="text-blue">Beyond</span>
          </h3>
          <p className="text-2xl py-5 max-w-lg">
            A collection of images, video and data fetch()ed from the <span className="text-blue">Nasa</span> and
            <span className="text-blue"> SpaceX API's</span>
          </p>
          <button className="text-base my-5 bg-gradient-to-r from-purple to-blue rounded-full hover:from-blue hover:to-purple">
            Go to space
          </button>
        </div>
        <div className="astronaut__container absolute">
          <img  src={astronaut} className="astronaut" alt="" />
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#00000"
              fill-opacity="1"
              d="M0,288L60,282.7C120,277,240,267,360,245.3C480,224,600,192,720,192C840,192,960,224,1080,245.3C1200,267,1320,277,1380,282.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
         
        </div>
      </div>

      <div className="image__of__day bg-black text-white py-28">
        <div>
          <ImgTextGrid
            gridImg={apod.hdurl}
            gridHeader={apod.title}
            gridImgInfo={apod.explanation}
          />
        </div>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00000"
            fill-opacity="1"
            d="M0,128L60,106.7C120,85,240,43,360,53.3C480,64,600,128,720,170.7C840,213,960,235,1080,250.7C1200,267,1320,277,1380,282.7L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto grid grid-cols-12 gap-6 py-24 px-8 bg-white">
        <div className="col-span-7 px-10">
          <Accordion data={launchData} />
        </div>
        <div className="col-span-5 pt-6 px-10">
          <h5 className="py-3 uppercase font-semibold text-md text-black">
            <span className="text-green">02 / </span> SpaceX flight data
          </h5>
          <h3 className="text-4xl tracking-widest font-bold text-black">
            Notes from several spaceX launches
          </h3>
          <p className="pt-6">
            SpaceX is an American space manufacturer, a provider of space
            transportation services, and a communications corporation
            headquartered in Hawthorne, California. SpaceX was founded in 2002
            by Elon Musk with the goal of reducing space transportation costs to
            enable the colonization of Mars
          </p>
        </div>
      </div>

     <div className="container mx-auto my-28 py-12 bg-black text-white rounded-md">
         
          <Table asteroidData={asteroidData}/>
      </div>
      
    </div>
  );
};

export default Home;
