"use client"

import Image from 'next/image';
import { CiEdit } from "react-icons/ci";
import { useRouter } from 'next/navigation';


const ProfileAvatar = ({currentUser}) => {

const router = useRouter();

  return (
    <>
        <div className=" w-[50px] h-[50px] md:w-28 md:h-28 rounded-full relative flex items-center justify-center">
           {currentUser?.image? <Image
            fill={true}
            src={currentUser?.profile?.profileurl?currentUser?.profile?.profileurl:currentUser?.image}
            alt='profile'
            sizes="(max-width: 640px) 540px, 800px"
            className='rounded-full object-cover border'
            /> :
             <div className="w-[60px] h-[60px] rounded-full ring-2 ring-purple-800 bg-yellow-900 text-zinc-100 flex items-center justify-center">
                 {currentUser?.name.charAt(0)}
             </div>
            }
        </div>
            <div className=" flex flex-col gap-[4px] mt-1">
            <div className='text-[18px] md:text-[18px] font-bold text-gray-300 tracking-tight'>{currentUser?.profile?.userName?currentUser?.profile?.userName:currentUser?.name}</div>
            <span className='text-sm leading-4 tracking-wide mr-1 rounded-sm text-zinc-300 '>{currentUser?.email}</span>
            <button
                onClick={()=>router.push(`/user/settings`)}
                className='
                flex items-center gap-4 rounded-[4px] py-[7px] bg-[#060a1b] hover:bg-[#070913] justify-center mt-3
                text-gray-300 text-sm font-semibold
                '>
                <div className="">
                    <CiEdit className='font-semibold' size="22px" color='white'/>
                </div>
                Edit Profile
            </button>
        </div>
   </>
  )
}

export default ProfileAvatar
