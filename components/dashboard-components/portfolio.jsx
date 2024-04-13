"use client"

import clsx from "clsx";
import Link from "next/link"
import { useEffect, useState } from "react";
import { MdArticle } from "react-icons/md"

const Portfolio = ({id}) => {
   
    const[mounted, setMounted] = useState(false);
    let href = `/portfolio/${id}`

    useEffect(()=>{
       setMounted(true);
    },[]);

    if(!mounted){
        return null;
    }
  return (
    <div 
         className={clsx("px-[2px] cursor-pointer py-[7px] flex gap-[2px] rounded-[5px] hover:bg-[#0a0c22f5]")}>
         
           <Link href={href} className="w-full flex items-center gap-[6px]">
            <div className="">
               <MdArticle size={18} color="#fff"/>
            </div>
              <div className="">
                <span className='text-sm font-semibold tracking-wide'>
                   My Portfolio
                </span>
              </div>
           </Link>
    </div>
  )
}

export default Portfolio
