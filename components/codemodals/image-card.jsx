"use client"

import { useState } from "react";
import toast from "react-hot-toast";
import { MdCheck, MdCopyAll } from "react-icons/md";


const ImageCard = ({data}) => {

    const[Copied, setCopied] = useState(false);

    const onCopy=(value)=>{
        navigator.clipboard.writeText(value);
        setCopied(true);
        toast.success("copied!");
        setTimeout(()=>{
          setCopied(false);
        },500);
      }
  return (
    <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       {data.map(d=>(
        <div 
          key={d.id} 
          className="h-[200px] group relative w-full active:scale-[1.05] transition duration-500 cursor-pointer" >
            <Image 
            src={d.imageUrl}
            alt={d.name}
            fill
            sizes="200px 180px"
            className="rounded-sm ring-1 object-cover hover:scale-[1.02] transition duration-300"
            />
            {Copied ?
                <MdCheck size={18} color='green' className='cursor-pointer'/>
                :
                <MdCopyAll onClick={()=>onCopy(d.imageUrl)} size={20} color="blue" className="bottom-0 right-0"/>
            }
        </div>
       ))
       }
    </div>
  )
}

export default ImageCard
