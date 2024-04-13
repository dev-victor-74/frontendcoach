import React from 'react'

const Bio = ({currentUser}) => {
  return (
    <div className='mx-[auto] md:mx-0 w-[100%] md:w-[70%] mt-4 '>
         <h1 className='text-gray-300 font-semibold'>Bio</h1>
         <div className="w-[100%] rounded-md px-6 py-4 border-zinc-400 bg-[#080f25] mt-2">
             <p className='
                text-sm text-gray-300
             '>
              {currentUser?.profile?.profileDesc}
             </p>
         </div>
    </div>
  )
}

export default Bio
