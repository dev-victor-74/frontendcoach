"use client"

import clsx from "clsx"

const CurrentStreak = ({level}) => {
  return (
    <div className='
     flex
     cursor-pointer
    bg-[#080f25] h-[180px] rounded-md hover:bg-[#0c1125] 
    '>
        <div 
       className="
        flex flex-col items-center justify-center w-full gap-4
       ">
          <div className="flex items-center">
              <span className='font-bold text-xl text-center text-zinc-300'>Level</span>
          </div>
          <div className={clsx("w-40 h-16 rounded-lg border flex items-center justify-center p-2",level==="Beginner"? "bg-green-800" :"bg-yellow-900")}>
              <span className='font-semibold text-sm text-gray-300'>
                  {level}
              </span>
          </div>
       </div>
    </div>
  )
}

export default CurrentStreak
