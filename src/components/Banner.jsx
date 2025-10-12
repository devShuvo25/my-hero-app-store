import React from "react";
import { Link } from "react-router";
import heroImg from "../assets/hero.png";

const Banner = () => {
  return (
    <div>
            <div className="flex flex-col justify-center text-center space-y-8 pt-15 px-15
    ">
      <h1 className="text-4xl font-extrabold">We Build <span className="
    font-extrabold 
    bg-clip-text 
    text-transparent 
    bg-gradient-to-r 
    to-[#9F62F2] 
    from-[#632EE3]">Productive</span> Apps</h1>
      <p className="mx-30 opacity-70">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex gap-3 justify-center">
        <Link className="btn btn-outline">Button1</Link>
        <Link className="btn btn-outline">Button2</Link>
      </div>
        <div className="text-center flex justify-center h-[400px]">
            <img className="h-full w-[700px]" src={heroImg} alt="" />
        </div>
    </div>
            <div className="h-[400px] bg-gradient-to-r 
    to-[#9F62F2] 
    from-[#632EE3] flex flex-col justify-center gap-15 items-center text-white">
        <h1 className="text-3xl font-bold">Trusted by Millions, Built for You</h1>
        <div className="flex gap-10">
            <div className="text-center space-y-1">
                <p className="text-sm">Total Downloads</p>
                <h1 className="text-4xl font-bold">29.6M</h1>
                <p className="text-sm">21% more than last month</p>
            </div>
            <div className="text-center space-y-1">
                <p className="text-sm">Total Downloads</p>
                <h1 className="text-4xl font-bold">29.6M</h1>
                <p className="text-sm">21% more than last month</p>
            </div>
            <div className="text-center space-y-1">
                <p className="text-sm">Total Downloads</p>
                <h1 className="text-4xl font-bold">29.6M</h1>
                <p className="text-sm">21% more than last month</p>
            </div>
        </div>

        </div>
    </div>
  );
};

export default Banner;

