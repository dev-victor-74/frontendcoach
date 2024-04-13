"use client"

import {useIframeSize, useSidebarStore } from "@/lib/sidebar-store";
import clsx from "clsx";

import { FiSidebar } from "react-icons/fi";
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import { TbPhotoMinus, TbPhotoPlus } from "react-icons/tb";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDataSaverOff } from "react-icons/md";

const CodeNavbar = ({onSubmit, onSave,loading,sabloading, name}) => {

  const{isOpen,onOpen, onClose} = useSidebarStore()
  const{isShown, iframeHeight, iframeWidth,isOutput, onOutput, onViewChallenge} = useIframeSize();

  const handleClose=()=>{
    return onClose()
  }
  const handleOpen=()=>{
    return onOpen()
  }


  return (
    <nav className='w-full px-1 py-1 bg-[#010216f5] h-[35px] relative flex items-center justify-between'>
      <div className="flex items-center justify-center gap-2">
         <div className="w-6 h-6 rounded-sm mt-1 px-1">
            {isOpen?
             <div className="w-full h-full group">
              <VscLayoutSidebarLeft onClick={handleClose} size={20} color="#fff" className="cursor-pointer"/>
              <span className="hidden absolute group-hover:flex bg-slate-900 z-10 text-xs
               text-zinc-200 w-max px-[5px] py-1 rounded-md ">close sidebar</span>
             </div>
             :
             <div className="w-full h-full group">
              <FiSidebar size={20} color="#fff" onClick={handleOpen} className="cursor-pointer"/>
              <span className="hidden absolute z-10 group-hover:flex bg-slate-900 text-zinc-200 
              w-max px-[5px] py-1 rounded-md text-xs ">open sidebar</span>
             </div>
            }
          </div>
          <div className="text-white text-sm font-semibold">
             {name}
          </div>
        </div>
       <div className="flex items-center gap-4">
          <button onClick={onSave && onSave} className="px-2 w-[80px] py-1 flex items-center justify-center
             pb-1 text-sm font-semibold pt-[2px] gap-1 rounded-[2px] bg-green-900
              text-zinc-100">
               {sabloading ?
                <MdDataSaverOff size={17} color="#fff" className="mx-auto animate-spin duration-500"/>
                :
               <span>Save</span>
               }
          </button>
          {/* <button className="px-2 w-[80px] py-1 flex items-center justify-center
             pb-1 text-sm font-semibold pt-[2px] gap-1 rounded-[2px] bg-[#0f0f4d]
              text-zinc-100">
                <FaCloudUploadAlt color="#fff" size={20}/>
                <span>Submit</span>
          </button> */}
         { isOutput?
          <div className="w-full h-full group rounded-sm">
          <TbPhotoPlus onClick={()=>onViewChallenge()} size={24} color="#fb81b8" className="cursor-pointer"/>
            <span className="hidden absolute group-hover:flex bg-slate-900 z-10 text-xs
            text-zinc-200 w-max px-[5px] py-1 rounded-md">show challenge file</span>
          </div>
           :
           <div className="w-full h-full group rounded-sm">
              <TbPhotoMinus onClick={()=>onOutput()} size={24} color="#9f5e84" className="cursor-pointer"/>
              <span className="hidden absolute group-hover:flex bg-slate-900 z-10 text-xs
               text-zinc-200 w-max px-[5px] py-1 rounded-md ">hide challenge file</span>
           </div>
        }
       </div>
       <div className="flex items-center gap-2 pr-2">
          <div className={clsx("w-max h-6 rounded-sm transition duration-500 bg-slate-300 flex items-center justify-center px-2",isShown?"opacity-100":"opacity-0")}>
             <span className="text-xs text-black">
                {isShown && (iframeHeight !== null || iframeWidth !== null) ? 
                   `${iframeWidth}px X ${iframeHeight}px`
                  :
                  null
                }
             </span>
          </div>
          {/* <button onClick={onOpenOne? onOpenOne: null}   
            className="px-1 py-1 rounded-sm w-6 h-6 bg-slate-500">

          </button> */}

          
          <button onClick={onSubmit && onSubmit} className="px-2 w-[80px] py-1 flex items-center justify-center
             pb-1 text-sm font-semibold pt-[2px] gap-1 rounded-[2px] bg-[#0f0f4d]
              text-zinc-100" disabled={loading}>
                {loading?
                 <MdDataSaverOff size={17} color="#fff" className="mx-auto animate-spin duration-500"/>
                 :
                  <>
                    <FaCloudUploadAlt color="#fff" size={20}/>
                    <span>Submit</span>
                  </>
                }
          </button>
          {/* 
          <button onClick={onOpenTwo? onOpenTwo: null}   
            className="px-1 py-1 rounded-sm w-6 h-6 bg-slate-500">

          </button>
          <button onClick={onOpenThree? onOpenThree: null} 
            className="px-1 py-1 rounded-sm w-6 h-6 bg-slate-500">

          </button> */}
       </div>
    </nav>
  )
}

export default CodeNavbar
