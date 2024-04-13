"use client"

import useModalStore from "@/lib/modal-store"
import { useEffect, useState } from "react";
import { TbPhotoPlus } from "react-icons/tb"


const Images = () => {

  const{onOpen} = useModalStore();
  const[mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  })

  if(!mounted){
    return null;
  }

  return (
    <div onClick={()=>onOpen("add-images")} className='
    flex
    bg-[#080f25]  h-[180px] rounded-md hover:bg-[#0c1125] ring-2 ring-purple-800
    cursor-pointer
   '>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
         <span className="text-xl font-bold text-zinc-300 select-none">Images</span>
         <div className="w-16 h-16 rounded-full flex items-center bg-slate-200 hover:bg-blue-300 justify-center border">
             <button>
               <TbPhotoPlus size={24} color="#fb81b8" className="cursor-pointer"/>
             </button>
         </div>
      </div>
   </div>
  )
}

export default Images
