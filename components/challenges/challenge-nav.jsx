"use client"

import { FaArrowLeftLong } from "react-icons/fa6";
import UserAvatar from "../user-avatar";
import { BiMenu } from "react-icons/bi";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";



const ChallengeNav = ({currentUser,href}) => {

    const router = useRouter();
    const pathname = usePathname()

    const{profile} = currentUser || {};

    const onClick=()=>{
        router.back()
    }
 
  return (
    <div className={clsx('w-full h-12 z-20 px-4 py-2 bg-[#181725] flex items-center justify-between sticky top-0 right-0')} >
      <div className="flex items-center gap-4">
         <FaArrowLeftLong onClick={onClick} size={20} color="#fff" className="font-bold cursor-pointer"/>
        { (pathname ==="/challenges")?
         <div 
          className='text-sm font-semibold bg-[#271db3] px-[14px] py-[6px] rounded-full text-zinc-200'>
           Challenges
         </div>:
         (pathname === "/submissions")?
         <div 
         className='text-sm font-semibold bg-[#271db3] px-[14px] py-[6px] rounded-full text-zinc-200'>
          Submissions
        </div>:""
        }
      </div>
       {currentUser ?
        <>
          <UserAvatar 
          currentUser={currentUser}
          href={href}
          />
          <BiMenu color="black" size={30}
          className="flex md:hidden cursor-pointer"
          />
        </>
          : ""
        }
 </div>
  )
}

export default ChallengeNav
