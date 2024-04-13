"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiLoaderAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const MyProjectCard = ({data}) => {

    const[mounted, setMounted] = useState(false);
    const[loading, setLoading] = useState(false);
    const router = useRouter();


    const onClick = ()=>{
        return router.push(`/submissions/${data?.id}`)
    }
    const onDelete=async()=>{
        try {
            setLoading(true);
            const deletedProject = await axios.delete(`/api/myprojects/${data?.id}`)
            if(deletedProject) {
                return toast.success("deleted!");
            }
        } catch (error) {
           toast.error("failed to delete this project");
        }finally{
            setLoading(false)
            router.refresh();
        }
    }

    useEffect(()=>{
       setMounted(true);
    },[]);

    if(!mounted){
        return null;
    }

  return (
    <div className="flex flex-col h-[170px] items-center justify-center gap-4 p-[2px] pb-2 ring-2 relative ring-purple-800 rounded-sm">
            <h3 className="text-lg text-center font-semibold text-zinc-300">
                {data?.name}
            </h3>

            <button onClick={onClick} className="text-zinc-300 font-semibold text-xs px-4 py-1 rounded-full bg-blue-800">View More</button>
       
        <div className="w-full flex items-center justify-end px-4">
            {loading?
           <BiLoaderAlt size={18} color="gray" className="animate-spin duration-500" />
           :
           <MdDelete size={18} color="pink" className="cursor-pointer" onClick={onDelete}/>}
        </div>
    </div>
  )
}

export default MyProjectCard
