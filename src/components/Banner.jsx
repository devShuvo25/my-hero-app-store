import React from "react";
import { Link } from "react-router";
import heroImg from "../assets/hero.png";
import googleplay from "../assets/googleplay-removebg-preview.png";
import appStore from "../assets/App_Store_(iOS).svg.png";

const Banner = () => {
  return (
    <div>
      <div
        className="flex flex-col justify-center text-center space-y-2 lg:space-y-8 lg:pt-15 px-5 lg:px-15
    "
      >
        <h1 className="text-2xl lg:text-4xl font-extrabold">
          We Build{" "}
          <span
            className="
    font-extrabold 
    bg-clip-text 
    text-transparent 
    bg-gradient-to-r 
    to-[#9F62F2] 
    from-[#632EE3]"
          >
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="mx-5 lg:mx-30 opacity-70 text-[10px] lg:text-[14px]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex gap-3 justify-center">
          <Link to='https://play.google.com/store/games?hl=en' className="btn ">
            <img src={googleplay} className="h-[20px]" />
            Google Play
          </Link>
          <Link to='https://www.apple.com/app-store/' className="btn ">
            <img src={appStore} className="h-[20px]" />
            App Store
          </Link>
        </div>
        <div className="text-center flex justify-center lg:h-[400px]">
          <img className="h-full w-[750px]" src={heroImg} alt="" />
        </div>
      </div>
      <div
        className="mx-3 rounded-2xl py-5 lg:py-16 bg-gradient-to-r 
    to-[#9F62F2] 
    from-[#632EE3] flex flex-col justify-center gap-10 lg:gap-15 items-center text-white"
      >
        <h1 className="text-center text-x2 lg:text-3xl font-bold">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="text-center space-y-1">
            <p className="text-sm">Total Downloads</p>
            <h1 className="text-2xl font-bold">29.6M</h1>
            <p className="text-sm">21% more than last month</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-sm">Total Downloads</p>
            <h1 className="text-2xl font-bold">29.6M</h1>
            <p className="text-sm">21% more than last month</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-sm">Total Downloads</p>
            <h1 className="text-2xl font-bold">29.6M</h1>
            <p className="text-sm">21% more than last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
