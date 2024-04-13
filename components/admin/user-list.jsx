"use client"

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BsTrash } from "react-icons/bs";


const UserList = ({user}) => {

  const router = useRouter();

  const onDeleteUser = async(userId)=>{

    try {
      await axios.delete(`api/users/delete/${userId}`);
      toast.success("successfully deleted");
    } catch (error) {
      toast.error("failed to delete user");
    }finally{
      router.refresh();
    }
  }

  return (
    <div className="flex items-center gap-2 w-full">
    <div className="w-12 h-12 overflow-hidden relative">
       <Image
         fill
         sizes="50px 48px"
         src={user?.profile?.profileurl? user?.profile?.profileurl : user?.image}
         alt={user?.profile?.userName? user?.profile?.userName : user?.name}
         className="rounded-full border object-cover"
       />
    </div>
    <div className="flex flex-col gap-1">
       <h1 className="font-bold text-[14px] tracking-wide text-zinc-200">{user?.profile?.userName? user?.profile?.userName : user?.name} </h1>
       <div className="flex items-center gap-2">
          <span className="px-2 rounded-full py-1 font-semibold
           md:font-bold text-xs text-zinc-200" id="upgrade2">{user?.UserApilimit?.plan}</span>
          <span className="
            bg-green-800 px-2 py-[2px] text-sm rounded-full font-semibold text-zinc-200
          ">{user?.profile?.level}</span>
       </div>
    </div>
    <button
     onClick={()=>onDeleteUser(user?.id)}
     className="flex ml-auto 
     font-semibold text-xs leading-3 bg-rose-700 
     px-3 py-3 rounded-sm text-zinc-300 gap-1 items-center"
    >
      <BsTrash size={14}/>
      <span className="text-xs font-semibold text-zinc-200">Delete</span>
    </button>
</div>
  )
}

export default UserList
