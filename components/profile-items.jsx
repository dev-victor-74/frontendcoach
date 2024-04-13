import { getMyProjects } from '@/app/utils/actions/get-my-projects'
import clsx from 'clsx'
import React from 'react'

const ProfileItems = async({profile}) => {
 
  const projects = await getMyProjects()

  return (
    <>
        <div className=" 
          cursor-pointer 
        hover:bg-[#0a0a20]
          flex items-center
        bg-[#080f25]
          rounded-[5px] 
          gap-2
          py-3
          px-3
          "
          >
              <span className={clsx("px-4 text-xs py-1 font-semibold rounded-full text-zinc-200", profile?.level ==="Beginner"?"bg-green-800" :"bg-yellow-900")}>{profile?.level}</span>
          </div>
          <div className=" 
          cursor-pointer 
        hover:bg-[#0a0a20]
          flex items-center
        bg-[#080f25]
          rounded-[5px] 
          gap-2
          py-3
          px-3
          "
          >
              <span className='
              text-gray-200
               bg-red-950
              text-[10px]
              px-2
              py-1
              rounded-[10px]
              '>{projects?.length}</span>
              <h1 className='text-gray-400 text-sm font-semibold'>Completed Projects</h1>
          </div>
      </>
  )
}

export default ProfileItems
