import React from "react";
import { Fa6 } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Details from "./Details";


const InstalledAppCard = ({app,handleRemove}) => {
    const {id,title,image,downloads,ratingAvg,size} = app;


  return (
   <div className="m-3">
    <div className="flex justify-between items-center shadow-sm p-3 lg:p-5 bg-base-100 rounded-xl">
        <div className="flex gap-5">
            <div className="bg-gray-300 flex justify-center items-center p-1 rounded-2xl">
                <img className="h-[60px] w-[60px] rounded-2xl" src={image} alt="" />
            </div>
        <div className="space-y-1">
            <h2 className=" lg:text-[22px] font-semibold">{title}</h2>
            <div className="flex gap-4 text-sm">
                <span className="flex text-[#00D390] items-center gap-1"><MdOutlineFileDownload/> {downloads / 1000000}M</span>
                <span className="flex text-[#FF8811] items-center gap-1"><FaStar/>{ratingAvg}</span>
                <span className="opacity-70">{size} MB</span>
            </div>
        </div>
        </div>
        <div></div>
        <button onClick={() =>handleRemove(id)} className="btn bg-[#00D390] text-white">Uninstall</button>
    </div>
    
</div>
  );
};

export default InstalledAppCard;
