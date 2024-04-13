"use client"

import { useRouter } from "next/navigation";
import { useReducer } from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";



const UpgradeBtn = () => {

  const router = useRouter();

  const onClick=()=>{
    router?.push("/pricing");
  }
  return (
    <div>
        <div id="upgrade2" className="w-[170px] h-[45px] rounded-full flex items-center justify-center">
            <button 
             onClick={onClick}
            className="w-[165px] flex items-center justify-center gap-2 h-[42px] px-3 bg-black rounded-full "
            >
                    <BsFillLightningChargeFill
                    color="lime"
                    size={16}
                    className="animate-bounce"
                    />
                    <span className="text-sm font-semibold text-gray-400">Upgrade Now</span>
            </button>
        </div>
    </div>
  )
}

export default UpgradeBtn
