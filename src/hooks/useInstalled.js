import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useInstalled = () => {
    const [installed,setInstalled] = useState([]);
    const [isInstalled,setIsInstalled] = useState(null);
    let installedApps = [];

    useEffect(() => {
          const currentInstalledApps = JSON.parse(localStorage.getItem('current-apps'));
          setInstalled(currentInstalledApps);
    },[])

    const handleInstall = (app) => {
        setIsInstalled(true);
       const currentInstalledApps = JSON.parse(localStorage.getItem('current-apps'));
       if(currentInstalledApps){
           const isDuplicate = currentInstalledApps.some(a => a.id === app.id);
           if(isDuplicate) return setIsInstalled(true);
           installedApps.push(...currentInstalledApps,app)
       }else{
        installedApps.push(app)

       }
       localStorage.setItem('current-apps' , JSON.stringify(installedApps))
       setInstalled(installedApps)
       !isInstalled? toast.success('App Installed', {
                                                position: "top-center",
                                                autoClose: 3000,
                                                hideProgressBar: false,
                                                closeOnClick: false,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                                theme: "light",
                                                })
        : toast.warn('Already installed this app');
    } 
    
    return [installed,isInstalled,handleInstall];
    
}
export default useInstalled;
