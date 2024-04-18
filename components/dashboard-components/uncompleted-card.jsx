"use client"

import Link from "next/link"
import { useEffect, useState } from "react";


const UncompletedCard = ({d}) => {

 const[isMounted, setisMounted] = useState(false);

 const href = `/code/${d?.challengeId}?saved=${d?.id}`

 useEffect(()=>{
    setisMounted(true);
  },[])

  if(!isMounted){
   return null
  }

  return (
    <div className="h-[200px] rounded-md bg-[#080f25] ring-2 ring-purple-600 shadow-md relative flex flex-col justify-center items-center gap-2 p-1 hover:scale-[1.02] transition duration-500">
    <h1 className="text-sm text-zinc-300 font-semibold text-center">{d?.name}</h1>
    <Link href={href} className='rounded-full mx-auto text-zinc-200 bg-blue-800 py-2 px-3 text-xs font-semibold cursor-pointer'>
       Continue
    </Link>
    
</div>
  )
}

export default UncompletedCard
