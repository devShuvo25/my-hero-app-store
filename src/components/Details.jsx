import { FaStar } from "react-icons/fa";
import { MdOutlineDownload } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { Link, useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import useInstalled from "../hooks/useInstalled";
import Chart from "./Chart";
import { useEffect, useState } from "react";
import NoApps from "../pages/NoApps";

const Details = () => {
  const dataFromLs = JSON.parse(localStorage.getItem("current-apps")) || [];
  const [cheak, setCheak] = useState(null);
  const { id } = useParams();
  const [data] = useFetch();
  const [, isInstall, handleInstall] = useInstalled();
  console.log(isInstall);

  const thisProduct = data.find((p) => String(p.id) === id);

  useEffect(() => {
    if (thisProduct && dataFromLs.length > 0) {
      const isAvailable = dataFromLs.some((p) => p.id === thisProduct.id);
      setCheak(isAvailable);
    }
  }, [thisProduct, dataFromLs]);
  const {
    title,
    companyName,
    image,
    ratingAvg,
    reviews,
    downloads,
    size,
    description,
  } = thisProduct || {};

  const { ratings } = thisProduct || {};

  return (
    <div >
        {
            thisProduct? 
       <div>
      <div className="flex flex-col lg:flex-row h-[300px] gap-10 lg:p-8 ">
        <div className="flex justify-center lg:w-[25%]">
          <img className="w-[250px]" src={image} alt="" />
        </div>
        <div className="flex w-full flex-col gap-2 px-5 lg:px-0">
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-[5px]">{title}</h1>
            <p className="text-sm opacity-70">Company name : {companyName}</p>
            <hr
              className="my-2 text-gray-300 px-5
                    "
            />
          </div>
          <div>
            <div className="flex justify-centr items-center gap-15">
              <div className="flex flex-col gap-1">
                <FiDownload className="mb-[3px]" size="25px" color="#00D390" />
                <p className="text-[12px] opacity-70">Downloads</p>
                <h1 className="text-2xl font-bold">{downloads / 1000000}M</h1>
              </div>
              <div className="flex flex-col gap-1">
                <FaStar
                  className="mb-[3px]"
                  size="25px"
                  color="#FF8811"
                ></FaStar>
                <p className="text-[12px] opacity-70">Average Rattings</p>
                <h1 className="text-2xl font-bold">{ratingAvg}</h1>
              </div>

              <div className="flex flex-col gap-1">
                <AiOutlineLike
                  className="mb-[3px]"
                  size="25px"
                  color="#632EE3"
                ></AiOutlineLike>
                <p className="text-[12px] opacity-70 ">Total Review</p>
                <h1 className="text-2xl font-bold">{reviews / 1000000}M</h1>
              </div>
            </div>
          </div>
          <hr
            className="my-2 text-gray-300 px-5
                    "
          />
          <div>
            <button
              onClick={() => handleInstall(thisProduct)}
              disabled={cheak}
              className="btn bg-[#00D390] text-white px-8"
            >
              {!cheak ? `Install (${size}MB)` : "Installed"}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-60 lg:mt-0">
        <Chart data={ratings} />
      </div>
      <div className="p-5">
        <h2 className="text-lg font-bold mb-4">Description</h2>
        <text className="text-sm opacity-80 ">{description}</text>
      </div>
    </div> : <NoApps/>
}
<div className="text-center p-8">
        <Link
          to="/apps"
          className="btn !text-white border-0 bg-gradient-to-tl
      from-[#9F62F2] to-[#632EE3]"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Details;
