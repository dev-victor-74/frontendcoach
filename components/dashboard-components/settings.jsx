"use client"

import { useRouter } from "next/navigation";
import { IoSettingsOutline} from "react-icons/io5";

const Settings = () => {

   const router = useRouter();

   const onClick =()=>{
     return router.push("/user/settings");
   }

  return (
    <div
     onClick={onClick}
    className="w-full md:w-1/2 h-[180px] px-6 py-3 bg-[#080f25] rounded-md flex self-start hover:bg-[#0c1125] cursor-pointer">
       <div className="w-full h-full flex flex-col justify-center gap-2">
            <IoSettingsOutline color="gray" size={26}/>
           <div className="flex flex-col">
             <h1 className="font-semibold md:font-bold text-[16px] md:text-xl text-zinc-300">Settings</h1>
             <p className="text-md text-zinc-300">Manage your settings and Preferances</p>
           </div>
       </div>
    </div>
  )
}

export default Settings
