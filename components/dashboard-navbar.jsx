"use client"


import Image from "next/image";
import {BiMenu} from "react-icons/bi";
import UserAvatar from "./user-avatar";
import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { MdCancel } from "react-icons/md";
import { format } from "date-fns";

const DashboardNavbar = ({currentUser, href}) => {

  const[mounted, setMounted]=useState(false);
  const[isOpen, setisOpen]=useState(false);

  const pathname = usePathname();
  const joinedDate = currentUser ? format(new Date(currentUser?.createdAt),"PP") : null



  const mobileLinks=[
    {
      label:"Dasboard",
      path:"/dashboard"
    },
    {
      label:"Profile",
      path:"/profile"
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
      label:"Completed Challenges",
      path:"/projects"
    },
    {
      label:"Get Pro",
      path:"/pricing"
    },
    {
      label:"My Portfolio",
      path:`/portfolio/${currentUser?.id}`
    },
  ]


  useEffect(()=>{
    setMounted(true);
  },[])

  if(!mounted){
    return null;
  }
  
  return (
    <div className='w-full h-14 z-20 px-4 py-2 bg-[#040414] flex items-center justify-between md:justify-end sticky top-0 right-0'>
       <div className="flex items-center gap-2 md:hidden cursor-pointer">
         <div className="w-8 h-8 relative ring-4 ring-purple-800 bg-blue-900 rounded-full">
           
         </div>
         <h2 className='font-bold text-2xl select-none text-zinc-100'>frontendcoach</h2>
      </div>
       <UserAvatar 
         currentUser={currentUser}
         href={href}
       />
       <BiMenu onClick={()=>setisOpen(true)} color="#fff" size={30}
        className="flex md:hidden cursor-pointer"
       />
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
    </div>
  )
}

export default DashboardNavbar
