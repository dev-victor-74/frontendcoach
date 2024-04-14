"use client"

import Link from 'next/link';

import SideBarLinks from './sidebar-links';
import { useSidebarStore } from '@/lib/sidebar-store';

import { MdPhoto, MdDashboard } from 'react-icons/md';
import { RiToolsLine } from "react-icons/ri";
import useModalStore from '@/lib/modal-store';
import { IoColorFill } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import UseProfile from './use-profile';



const CodeSidebar = () => {
    
    const[isMounted, setisMounted] = useState(false);
    const{onOpen} = useModalStore();
    const{isOpen} = useSidebarStore();

   const fetcher=async(url)=>{
      try {
        const res = await axios.get(url)
        return res;
      } catch (error) {
        
      }
   }
    const{data} = useSWR("/api/users/get",fetcher)
    console.log(data)


    useEffect(()=>{
      setisMounted(true);
    },[])

    if(!isMounted){
      return null;
    }

  return (
    isOpen &&
    <div className="flex w-[45px] fixed bg-[#010214f5] transition duration-75 animate-none pb-3 h-screen z-50">
      <aside className='w-full h-full px-1 py-2 relative flex flex-col items-center justify-between '>
        <div className="w-full h-full">
            <div className="px-[1px] bg-[#0c0c0e] py-[3px] relative rounded-sm hover:bg-slate-900">
               <Link href="/dashboard">
                <MdDashboard size={22} color='gray' className='m-auto cursor-pointer bg-slate-800'/>
               </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 mt-4">
                <SideBarLinks
                    icon={<MdPhoto size={24} color='#b383f2'/>}
                    onClick={()=>onOpen("images")}
                    label="Photo"
                />
                <SideBarLinks
                    icon={<IoColorFill size={24} color='blue'/>}
                    onClick={()=>onOpen("colors")}
                    label="Color"
                />
                <SideBarLinks
                    icon={<RiToolsLine size={24} color='#b2f2ff'/>}
                    onClick={()=>onOpen("tools")}
                    label="Tools"
                />
                {/* <SideBarLinks
                    icon={<PiLinkSimple size={24} color='#fff' className='text-zinc-800' />}
                    onClick={()=>onOpen("link-modal")}
                    label="Links"
                /> */}
            </div>
        </div>
        <div className="flex flex-col items-center gap-3">
            <UseProfile user = {data?.data}/>
            {/* <div 
               onClick={()=>onOpen("editor-settings")}
               className="w-8 h-8 bg-[#16161f] relative
             hover:bg-slate-900 rounded-sm flex items-center justify-center mt-1 m-auto cursor-pointer">
              <MdSettings size={20} color='#fff'/>
              <span className='bg-zinc-950 text-white text-xs w-max rounded-sm sr-only'>Settings</span>
            </div> */}
        </div>
      </aside >
    </div>
  )
}

export default CodeSidebar
