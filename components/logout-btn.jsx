"use client"

import { signOut } from "next-auth/react"
import { HiOutlineLogout } from "react-icons/hi";


const LogoutBtn = () => {
  return (
      <div className="w-full px-[17px] mt-5">
          <button
           onClick={()=>signOut()}
           className='flex items-center gap-2'
          >
           <HiOutlineLogout size={20} color='white'/> 
            <span className='text-sm font-semibold text-zinc-300'>Logout</span>  
          </button>
       </div>
  )
}

export default LogoutBtn
