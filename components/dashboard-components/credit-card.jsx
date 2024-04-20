"use client"

import { useEffect, useState } from "react"

const CreditCard = ({credit}) => {

    const[mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    },[]);

    if(!mounted){
        return null;
    }
  return (
    <div className="w-full flex flex-col items-center gap-1 bg-slate-900 p-1 rounded-md">
           {
            credit?.plan === "Pro"?
             <div className="text-xs font-medium text-zinc-300" id="upgrade2">
                You are currently on a Pro plan
              </div>
           : null
           }
    </div>
  )
}

export default CreditCard
