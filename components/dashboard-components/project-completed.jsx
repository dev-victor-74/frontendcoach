"use client"

import { useEffect, useState } from "react"

const ProjectCompleted = ({projectNumber}) => {

  const[isMounted, setisMounted] = useState();

  useEffect(()=>{
   setisMounted(true);
  },[])

  if(!isMounted){
    return null
  }

  return (
    <div className='
    cursor-pointer
    flex 
     bg-[#080f25]  h-[180px] rounded-md hover:bg-[#0c1125] px-2
    '>
       <div 
       className="
        flex flex-col items-center justify-center w-full gap-4
       ">
          <div className="flex items-center">
              <span className='font-bold text-xl text-center text-zinc-300'>Challenges Completed</span>
          </div>
          <div className="w-16 h-16 rounded-full border bg-sky-500 flex items-center justify-center p-2">
              <span className='font-semibold text-xs text-gray-300'>
                  {projectNumber}
              </span>
          </div>
       </div>
    </div>
  )
}

export default ProjectCompleted
