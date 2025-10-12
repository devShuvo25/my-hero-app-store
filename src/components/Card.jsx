import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const Card = () => {
  return (
    <div className="card bg-base-100 w-60 shadow-sm p-3">
      <figure>
        <img
          className="h-[200px]"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="space-y-3">
        <h3 className="text-[20px] mt-2">Title of the App</h3>
        <div className="flex justify-between items-center ">
          <span className="flex justify-between gap-3 items-center bg-gray-100 px-4 py-1 rounded-[5px] text-[#00D390]">
            <MdOutlineFileDownload color="#00D390" />
            <p className="">5</p>
          </span>
          <span className="flex justify-between gap-3 items-center bg-gray-100 px-4 py-1 rounded-[5px] text-[#FF8811]">
            <FaStar color="#FF8811" />
            <p className="">5</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
