"use client"

import { useEffect, useState } from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { LuCopy } from 'react-icons/lu'
import { FaLinkedin } from "react-icons/fa";
import toast from 'react-hot-toast';

const UserLinks = ({profile, currentUser}) => {

     const[mounted, setMounted] = useState(false);
     const[copied, setCopied] = useState(false);
     const[link, setlink] =useState("");

     
     const onCopy=(value)=>{
        navigator.clipboard.writeText(value);
        setCopied(true);
        toast.success("copied!")
        
        setTimeout(() => {
           setCopied(false)
         }, 500);
      }
      
      useEffect(()=>{
         setMounted(true);
         const url = `${window?.location?.origin}/portfolio/${currentUser?.id}`
         setlink(url);
     },[]);

     if(!mounted){
        return null;
     }
  return (
    <>
    <div className="w-full md:w-[100%] rounded-md hover:bg-[#0a0a20] flex px-2 py-2 items-center justify-between bg-[#080f25]">
     <span className='text-zinc-200 text-xs font-semibold'>
      Portfolio Link
     </span>
     <input readOnly type="url" value={link} className="ring-1 w-[80%] text-zinc-900 text-sm font-semibold ring-blue-950 rounded-md focus:outline-none px-2 py-1"/>
     <LuCopy size={16} color="#fff" onClick={()=>onCopy(link)} className='cursor-pointer' />
  </div>
    <div className="w-full md:w-[80%] rounded-md hover:bg-[#0a0a20] flex px-2 py-2 items-center justify-between bg-[#080f25]">
    <BsTwitterX size={18} color="silver"/>
     <input readOnly type="url" value={profile?.twitterLink} className="ring-1 w-[80%] text-zinc-900 text-sm font-semibold ring-blue-950 rounded-md focus:outline-none px-2 py-1"/>
     <LuCopy size={16} color="#fff" className='cursor-pointer'  onClick={()=>onCopy(profile?.twitterLink)}/>
  </div>
  <div className="w-full md:w-[80%] rounded-md hover:bg-[#0a0a20] flex px-2 py-2 items-center justify-between bg-[#080f25]">
    <FaLinkedin size={22} color="blue"/>
     <input readOnly type="url" value={profile?.LinkedinLink} className="ring-1 w-[80%] text-zinc-900 text-sm font-semibold ring-blue-950 rounded-md focus:outline-none px-2 py-1"/>
     <LuCopy size={16} color="#fff" className='cursor-pointer' onClick={()=>onCopy(profile?.LinkedinLink)} />
  </div>
  
  </>
  )
}

export default UserLinks
