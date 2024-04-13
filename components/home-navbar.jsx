"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import UserAvatar from './user-avatar';
import { usePathname } from 'next/navigation';
import { format } from 'date-fns';
import { MdCancel } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';
import clsx from 'clsx';



const links = [
  {
    id:1,
    label:"Challenges",
    href:"/challenges"
  },
  {
    id:2,
    label:"Submissions",
    href:"/submissions"
  },
  {
    id:3,
    label:"Hire Developers",
    href:"/hire-developers"
  },
]


const mobileLinks=[
  {
    label:"Dasboard",
    path:"/dashboard"
  },
  
  {
    label:"Challenges",
    path:"/challenges"
  },
  {
    label:"Submissions",
    path:"/submission"
  },
  
  {
    label:"Get Pro",
    path:"/pricing"
  },
 
]

const HomeNavbar = ({currentUser}) => {
  
  const {data, status} = useSession();
  const[isOpen, setisOpen]=useState(false);

  const pathname = usePathname();
  const joinedDate = currentUser ? format(new Date(currentUser?.createdAt),"PP") : null


  return (
    <nav className='
      w-full
      h-[50px]
      flex
      justify-between
      item-center
      px-6
      py-2
    '>
      <div className="flex items-center">
        <Link href="/" className='w-full gap-2 flex items-center'>
         <div className="w-8 h-8 rounded-full ring-4 ring-purple-800 bg-blue-900">
          
         </div>
         <h1 className='font-bold text-2xl text-white'>frontendcoach</h1>
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-4">
          {
            links.map(link=>(
              <Link key={link.id}
                  href={link.href} 
                  className='text-white font-normal text-sm'>
                 {link.label}
              </Link>
            ))
         }
         <Link 
                  href="/pricing"
                  className='text-white px-3 py-1 rounded-full font-semibold text-xs' id='upgrade2'>
                 Get Pro
          </Link>
      </div>
      <div className="hidden  md:flex items-center">
           {currentUser? 
           <UserAvatar currentUser={currentUser} href="/dashboard"/>
           : <Link href="/auth/sign-in">
              <button
                type='button'
                className='
                text-sm 
                flex items-center
              bg-[#1b1bb4]
                px-5
                py-2
                font-semibold
                rounded-md
              text-white 
                cursor-pointer'
              >Sign in</button>
           </Link>}
      </div>
      <div className="flex md:hidden items-center">
      <BiMenu onClick={()=>setisOpen(true)} color="#fff" size={30}
        className="flex md:hidden cursor-pointer"
       />
      </div>
      {isOpen && 
       <div className="absolute top-0 right-0 w-full bg-slate-100 h-screen z-50">
           <div className="w-full relative h-full px-4 py-4 flex items-center flex-col">
            <MdCancel
             onClick={()=>setisOpen(false)}
             size={24} color="black" className="top-4 right-8 cursor-pointer absolute"/>
            <div className="w-12 relative h-12 rounded-full">
                <Image
                 src={currentUser?.profile?.profileurl? currentUser?.profile?.profileurl:currentUser?.image}
                 fill
                 sizes="50px 48px"
                 alt={currentUser?.profile?.userName?currentUser?.profile?.userName:currentUser?.name}
                 className="object-cover rounded-full ring-2 ring-purple-800"
                /> 
              </div>
              <div className="w-full flex flex-col items-center gap-[2px] mt-2">
                 <span className="text-sm font-medium text-zinc-900">
                   {currentUser?.email}
                 </span>
                 <span className="text-sm font-semibold text-zinc-900">
                   {currentUser?.profile?.userName?currentUser?.profile?.userName:currentUser?.name}
                 </span>
                 <span className="text-xs font-semibold text-zinc-900 mt-1">
                  Member since {joinedDate}
                 </span>
              </div>

             <div className="w-[80%] mx-auto flex flex-col items-center justify-center gap-4 px-2 mt-10">
                  {
                    mobileLinks.map(link=>(
                      <div key={link.label} onClick={()=>setisOpen(false)} className="flex w-full items-center">
                       <Link href={link.path} className={clsx("w-full text-xs font-semibold px-3 py-2 rounded-full text-center",pathname ===link.path? "bg-[#121029] text-zinc-300":"ring-1 ring-blue-950 text-zinc-900")}>
                         {link.label}
                       </Link>
                     </div>
                  ))
                  }
                  <button className="w-full ring-1 ring-blue-950 text-xs font-semibold py-3 px-2 rounded-full">Logout</button>
             </div>

           </div>
       </div>}
    </nav>
  )
}

export default HomeNavbar