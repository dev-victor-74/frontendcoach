
import { getCurrentUser } from "@/app/utils/actions/get-current-user";
import { UserRole } from "@prisma/client";
import { redirect } from "next/navigation";


import AddChallenge from "@/components/admin/add-challenge";
import Challenges from "@/components/admin/challenges";
import Messages from "@/components/admin/messages";
import ProUsers from "@/components/admin/pro-users";
import Submissions from "@/components/admin/submissions";
import Users from "@/components/admin/users";
import Images from "@/components/admin/add-image";

const DashBoardPage = async() => {
  
  const currentUser = await getCurrentUser()

  if(!currentUser){
    return redirect("/");
  }

  if(currentUser.role === UserRole.GUEST){
    return redirect("/dashboard")
  }

  return (
    <div className='w-full h-screen px-4 py-5'>
       <div className='w-full font-bold flex gap-2 tracking-wide text-zinc-300 text-[26px]'>
          <span
          >Welcome</span>
          <span className='text-3xl text-indigo-400'>
            {currentUser?.name}
          </span>
        </div>
       <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
           <Users/>
           <ProUsers/>
           {/* <Messages/> */}
           <Challenges/>
           <Submissions/>
           <AddChallenge/>
           <Images/>
       </div>
    </div>
  )
}

export default DashBoardPage
