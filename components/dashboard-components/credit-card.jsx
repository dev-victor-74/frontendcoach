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
    <div className="w-full flex flex-col items-center gap-1 bg-slate-900 py-1 rounded-md">
           {
            credit?.plan === "Pro"?
             <div className="text-xs w-full font-medium text-zinc-300 px-1 rounded-full" id="upgrade2">
                You are currently on a Pro plan
              </div>
           : null
           }
    </div>
  )
}

export default CreditCard
