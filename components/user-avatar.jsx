"use client"

import clsx from "clsx";
import { signOut } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import { usePathname} from "next/navigation";
import { useState } from "react";

import { format } from "date-fns";
import {BiChevronDown, BiChevronUp} from "react-icons/bi";


const UserAvatar = ({currentUser ,href}) => {

    const[isOpen, setIsOpen] = useState(false);
    const{profile} = currentUser || {};

    const joinedDate = currentUser ? format(new Date(currentUser?.createdAt),"PP") : null

    const onOpenChange=()=>{
        setIsOpen(prev=>!prev)
    }

    const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center relative justify-center gap-2 cursor-pointer bg-slate-900 py-1 px-1 rounded-2xl">
        <div className="
        flex items-center justify-center w-8 h-8 relative rounded-full bg-yellow-900
        ">

         { currentUser?.image?
          <Image
            fill
            alt="profile photo"
            src={(!profile?.profileurl)? currentUser?.image : profile?.profileurl}
            className="rounded-full object-cover cursor-pointer"
            sizes="30px 28px"
          />
          :
        <span className='text-center font-semibold text-zinc-200'>{currentUser?.name?.charAt(0).toUpperCase()}</span>}
        </div>
       { pathname !=="/" && <span className='text-zinc-200 text-[14px] font-semibold '>
          {(!profile?.userName)?
            currentUser?.name : profile?.userName
          }
        </span>}
        <button>
            { isOpen?
                <BiChevronUp size={20} className='text-zinc-200' onClick={onOpenChange}/>
                :
                <BiChevronDown size={20} className='text-zinc-200' onClick={onOpenChange}/>
            }
        </button>

       { isOpen &&
            <div className="w-[280px] rounded-sm px-[10px] py-3 bg-[#fff] absolute z-50 top-12 right-3 shadow-xl">
              <div className="w-full h-full flex flex-col ">
                <div className="w-full border-b pb-2 flex flex-col justify-center gap-[1px] mb-1">
                    <p className="text-[20px] font-bold text-zinc-900">
                      {(!profile?.userName)?
                       currentUser?.name : profile?.userName
                       }
                      </p>
                    <p className="text-sm font-bold text-zinc-600">{currentUser?.email}</p>
                </div>
               <div className="flex flex-col justify-center gap-1 mt-[2px]">
                   { href && <Link href={href}
                    className={clsx("font-bold px-2 py-[10px] rounded-[3px] text-sm text-zinc-900",(pathname === href) && "bg-zinc-200")}>
                      Dashboard
                   </Link>}
                   <div className="font-bold px-2 py-[8px] hover:bg-zinc-200 rounded-[3px] bg-zinc-100/60 text-sm text-zinc-900">
                    <Link href="/user/settings" className="text-zinc-900">
                      Settings
                    </Link>
                   </div>
                   <button onClick={()=>signOut()} className="font-bold text-start px-2 py-[8px] hover:bg-zinc-200 rounded-[3px] bg-zinc-100/60 text-sm text-zinc-900">
                      Logout
                   </button>
                  {(pathname === "/dashboard") &&
                    <div className="text-sm font-semibold px-1 mt-1 py-[6px] text-gray-900 border-t">
                    Member since {joinedDate}
                  </div>}
               </div>
           </div>
        </div>}
  </div>
  )
}

export default UserAvatar
