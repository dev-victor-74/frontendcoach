"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const StartChallenge = () => {

  const[mounted, setMounted] = useState(false);

  const router = useRouter();

  const onClick=()=>{
    return router?.push("/challenges")
  }

  useEffect(()=>{
    setMounted(true);
  },[]);

  if(!mounted){
    return null;
  }
  return (
    <div className='
    flex
    bg-[#080f25]  h-[180px] rounded-md hover:bg-[#0c1125]
    cursor-pointer
   '>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
         <span className="font-bold text-xl text-zinc-300 ">Start a Challenge</span>
         <div className="w-16 h-16 rounded-full flex items-center bg-blue-400 hover:bg-blue-300 justify-center border">
             <button className="w-full h-full flex items-center justify-center" onClick={onClick}>
                 <AiOutlinePlus 
                  size={18}
                  color="black"
                  className="font-bold text-xl"
                 />
             </button>
         </div>
      </div>
   </div>
  )
}

export default StartChallenge
