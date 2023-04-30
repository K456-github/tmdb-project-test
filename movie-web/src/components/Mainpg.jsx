import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const Mainpg = () => {
  return (
    <div className="mainpgbg">
      {/* <div className="flex justify-around">
      <div className="h-screen flex justify-center items-center text-white flex-warp">
        <div className="">
          <Link to={"/home"}>
            <img
              src="./src/images/popcorn.png"
              className="w-[250px] animate-spinning "
              alt=""
              />
          </Link>
        </div>
      </div>
      </div> */}
      <div className=" showcase">
        <video src="./src/video/Marvel Studios’ The Marvels Teaser Trailer.webm" autoPlay muted loop className="" ></video>
        <div className="content">
         
          <h2 className="text-white customfonts  px-36 py-72 md:px-[300px] md:py-[300px] lg:px-[600px] lg:py-[500px]  xl:px-[800px] xl:py-[800px] 2xl:px-[800px] 2xl:py-[800px] rounded-md"> Chilling Time
          <div className="flex justify-center">
          <Link to={'/home'}>
          <button className="introbtn ">
            <span className="fontstyle">Click to Choose</span>
          </button> 
          </Link>
          </div>
          
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Mainpg;
