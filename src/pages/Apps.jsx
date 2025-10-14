import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import { Link } from "react-router";
import Loading from "./Loading";

const Apps = () => {
  const [apps,isLoading] = useFetch();
  console.log(isLoading)
  
 const [inputValue,setInputValue] = useState('');
 const searchValue = inputValue.trim().toLocaleLowerCase();
 const searchedApps = searchValue?
  apps.filter(app => app.title.trim().toLocaleLowerCase().includes(searchValue)) 
 : apps

  return (
    
    <div>
      <div className="text-center space-y-3 py-10">
        <h1 className="text-3xl font-semibold">Our All Applications</h1>
        <p className="opacity-70">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center py-6 px-8">
        <h2 className="text-xl">({searchedApps.length}) Apps Found</h2>
        <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input onChange={(e) => setInputValue(e.target.value)} type="search" required placeholder="Search" />
</label>
      </div>
      <div className="px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {
        isLoading? <Loading/> : searchedApps.map((app) => (
          <Card key={app.id} app={app} />
        ))}
      </div>
      <div className="text-center p-8">
        <Link
          to="/"
          className="btn !text-white border-0 bg-gradient-to-tl
      from-[#9F62F2] to-[#632EE3]"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Apps;
