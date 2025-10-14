import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { useNavigate } from "react-router";


const Card = ({app}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/app/details/app/${id}`)

  }
    const {id,title,image,ratingAvg} = app;
  return (
    <div onClick={handleNavigate} className="card bg-base-100  shadow-sm p-3 hover:cursor-pointer">
      <figure>
        <img
          className="h-[200px] rounded-4xl"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="space-y-3">
        <h3 className="text-[20px] mt-2">{title}</h3>
        <div className="flex justify-between items-center ">
          <span className="flex justify-between gap-3 items-center bg-gray-100 px-4 py-1 rounded-[5px] text-[#00D390]">
            <MdOutlineFileDownload color="#00D390" />
            <p className="">5</p>
          </span>
          <span className="flex justify-between gap-3 items-center bg-gray-100 px-4 py-1 rounded-[5px] text-[#FF8811]">
            <FaStar color="#FF8811" />
            <p className="">{ratingAvg}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
