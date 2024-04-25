"use client"

import Image from "next/image";
import toast from "react-hot-toast";


const ImageCard = ({data}) => {


    const onCopy=(value)=>{
        navigator.clipboard.writeText(value);
        toast.success("copied!");
      }

  return (
    <div className="mt-2 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
       {data?.map(d=>(
        <div 
          key={d?.id} 
          className="h-[170px] group relative w-full active:scale-[1.05] transition duration-500 cursor-pointer" >
            <Image 
            src={d?.imageUrl}
            alt={d?.name}
            fill
            sizes="200px 180px"
            className="rounded-sm ring-1 object-cover hover:scale-[1.02] transition duration-300"
             onClick={()=>onCopy(d?.imageUrl)}
            />
        </div>
       ))
       }
    </div>
  )
}

export default ImageCard
