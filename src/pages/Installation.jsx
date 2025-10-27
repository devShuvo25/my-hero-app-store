import React, { useEffect, useState } from "react";
import InstalledAppCard from "../components/InstalledAppCard";
import useInstalled from "../hooks/useInstalled";
import { Link } from "react-router";
import NoAppsFound from "./NoAppsFound";
import { toast } from "react-toastify";

const Installation = () => {
  const [currentApps] = useInstalled();
  const [installedApps, setInstalledApps] = useState([]);
  useEffect(() => {
    setInstalledApps(currentApps);
  }, [currentApps]);

  const handleRemove = (id) => {
    const lsData = JSON.parse(localStorage.getItem("current-apps"));
    const existingApp = lsData.filter((a) => a.id !== id);
    setInstalledApps(existingApp);
    localStorage.setItem("current-apps", JSON.stringify(existingApp));
    toast.success('Succesfully Uninstalled the App');
  };
  const [sortedApps,setSortedApps] = useState([]);
  useEffect(()=> {
    setSortedApps(installedApps)
  },[installedApps])
  const handleSorting = (value) =>{
    let copyOfInsatalled = [...installedApps];
    if(value === "asc"){
      copyOfInsatalled.sort((a,b) => a.downloads - b.downloads)
      setSortedApps(copyOfInsatalled);
    }
    else if(value === "dsc"){
      copyOfInsatalled.sort((a,b) => b.downloads - a.downloads);
      setSortedApps(copyOfInsatalled)
    }
    else{
      setSortedApps(installedApps)
    }
  }
  return (
    <div className="min-h-[calc(100vh-280px)]">
      <title>PULSE - Instalation</title>
     <div className="flex flex-col gap-3 items-center justify-center text-center">
       <h1 className="text-4xl font-bold">Your Install Apps</h1>
      <p className="opacity-70">Explore the trending Apps On the market developers by us</p>
     </div>
      <div className="flex flex-col lg:flex-row gap-3 items-center justify-between p-5">
        <h2 className="text-xl">({sortedApps.length || 0}) Apps Found</h2>

        <select defaultValue="Pick a font" 
        onChange={(e) => handleSorting(e.target.value)}
        className="select select-ghost bg-white">
          <option disabled={true}>Sort by Downloads</option>
          <option value="asc">Low - High</option>
          <option value="dsc">High - Low</option>
        </select>
      </div>
      {sortedApps.length === 0 ? (
        <NoAppsFound />
      ) : (
        sortedApps.map((app) => (
          <InstalledAppCard
            handleRemove={handleRemove}
            key={app.id}
            app={app}
          />
        ))
      )}
      <div className="text-center flex justify-center items-end">
        <Link
          to="/"
          className="btn !text-white  border-0 bg-gradient-to-tl
      from-[#9F62F2] to-[#632EE3]"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Installation;
