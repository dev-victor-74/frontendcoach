"use client"

import useModalStore from "@/lib/modal-store";
import clsx from "clsx";
import { useRouter } from "next/navigation"
import { FaArrowLeftLong, FaRegComment } from "react-icons/fa6";
import { HiLink } from "react-icons/hi";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const SubNav = ({id, user, name}) => {

    const router = useRouter();
    const[copied, setCopied]= useState(false);
    const[link, setlink]= useState("");

    const {onOpen} = useModalStore();

    const onCopy=(value)=>{
      navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success("project link copied!")
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }

    const openComment=()=>{
      return onOpen("submission-comments")
    }

    const onClick=()=>{
        router.back()
    }

    useEffect(()=>{
     const url = `${window.location.origin}/submissions/${id}`
     setlink(url)

    },[id]);
  

  return (
    <div className={clsx('w-full h-14 z-20 px-4 py-2 bg-[#0e0933] flex items-center justify-between sticky top-0 right-0')} >
      <div className="flex w-full items-center gap-4 justify-between">

        <div className="flex items-center gap-3">
            <FaArrowLeftLong onClick={onClick} size={20} color="#fff" className="font-bold cursor-pointer"/>
            <div className="flex flex-col md:flex-row items-center gap-[2px] md:gap[8px]">
                <h3 className="text-lg md:text-xl font-semibold md:font-bold  text-zinc-200 ml-2">
                  {name}
                </h3>
                <div className="flex items-center gap-1 md:ml-2">
                  <span className="text-sm font-bold text-zinc-300 mt-1">
                  by {user?.profile?.userName? user?.profile?.userName:user?.name}
                  </span>
                </div> 
            </div>
        </div>

        <div className="flex items-center">
            <div className="flex items-center gap-2">
                <div className="w-[100px] md:w-[300px] rounded-lg ml-2 ring-1 ring-purple-800 bg-slate-400 h-7">
                   <input type="url" readOnly value={link} className="w-full px-1 rounded-lg h-full bg-slate-200 text-sm font-medium" />
                </div>
                <div className="flex items-center gap-[5px]">
                  <HiLink onClick={()=>onCopy(link)} size={20} color="#fff" className="cursor-pointer" />
                </div>
            </div>
        </div>
      </div>
 </div>
  )
}

export default SubNav
