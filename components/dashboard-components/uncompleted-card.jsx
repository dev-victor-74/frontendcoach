"use client"

import axios from "axios";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const UncompletedCard = ({d}) => {

 const[isMounted, setisMounted] = useState(false);
 const[loading, setLoading] = useState(false);

 const href = `/code/${d?.challengeId}?saved=${d?.id}`
 const router = useRouter();

 const onDelete=async()=>{
  setLoading(true);
  try {
    await axios.delete(`/api/submission/save/${d?.id}`);
    toast.success("Deleted");
  } catch (error) {
    toast.error("failed to delete");
  }finally{
    router?.refresh();
    setLoading(false);
  }
 }

 useEffect(()=>{
    setisMounted(true);
  },[])

  if(!isMounted){
   return null
  }

  return (
    <div className="h-[200px] rounded-md bg-[#080f25] ring-2 ring-purple-600 shadow-md relative flex flex-col justify-center items-center gap-2 p-1 hover:scale-[1.02] transition duration-500">
    <h1 className="text-sm text-zinc-300 font-semibold text-center">{d?.name}</h1>

    <Link href={href} className='rounded-full mx-auto text-zinc-200 bg-blue-800 py-2 px-3 text-xs font-semibold cursor-pointer'>
       Continue
    </Link>
     <div className="w-full flex items-center justify-center px-4">
            {loading?
           <BiLoaderAlt size={18} color="gray" className="animate-spin duration-500" />
           :
           <MdDelete size={18} color="pink" className="cursor-pointer" onClick={onDelete}/>}
      </div>
</div>
  )
}

export default UncompletedCard
