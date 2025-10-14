import React, { useEffect, useState } from "react";
import InstalledAppCard from "../components/InstalledAppCard";
import useInstalled from "../hooks/useInstalled";
import { Link } from "react-router";
import NoAppsFound from "./NoAppsFound";

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
  };
  console.log(installedApps);
  return (
    <div className="min-h-[calc(100vh-280px)]">
      <div className="flex items-center justify-between p-5">
        <h2 className="text-xl">({installedApps.length}) Apps Found</h2>
        <select defaultValue="Pick a font" className="select select-ghost bg-white">
          <option disabled={true}>Sort by Size</option>
          <option>Low - High</option>
          <option>High - Low</option>
        </select>
      </div>
      {installedApps.length === 0 ? (
        <NoAppsFound />
      ) : (
        installedApps.map((app) => (
          <InstalledAppCard
            handleRemove={handleRemove}
            key={app.id}
            app={app}
          />
        ))
      )}
      <div className="text-center">
        <Link
          to="/"
          className="btn !text-white border-0 bg-gradient-to-tl
      from-[#9F62F2] to-[#632EE3]"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Installation;
