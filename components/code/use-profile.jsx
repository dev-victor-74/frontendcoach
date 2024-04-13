"use client"

import Image from 'next/image';
import { HiOutlineLogout } from "react-icons/hi";
import { signOut } from 'next-auth/react';


const UseProfile = ({user}) => {
  return (
    <div className='px-1 flex flex-col gap-4 items-center mt-auto cursor-pointer'>
        <div className="w-8 h-8 rounded-full ring-0 overflow-hidden relative">
             {user && 
             <Image
               src={user?.profile?.profileurl? user?.profile?.profileurl : user?.image}
               alt={user?.profile?.userName? user?.profile?.userName : user?.name}
               fill
               priority
               sizes='28px 30px 29px'
               className='object-cover'
             />}
        </div>
       <HiOutlineLogout size={20} color='#fff' onClick={()=>signOut()}/>
    </div>
  )
}

export default UseProfile
