import React from 'react'

const ProfileStrength = ({points}) => {
  return (
    <div className='
    cursor-pointer
    flex 
    bg-[#080f25]  h-[180px]  rounded-md hover:bg-[#0c1125]
   '>
        <div 
       className="
        flex flex-col items-center justify-center w-full gap-4
       ">
          <div className="flex items-center">
              <span className='font-bold text-xl text-center text-zinc-300'>Current streak</span>
          </div>
          <div className="w-16 h-16 rounded-full border bg-red-600 flex items-center justify-center p-2">
              <span className='font-semibold text-xs text-gray-300'>
                  {points}
              </span>
          </div>
       </div>
   </div>
  )
}

export default ProfileStrength
