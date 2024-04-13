import { getAllUsers } from "@/app/utils/actions/get-all-users";
import { UserPlan } from "@prisma/client";

const ProUsers = async() => {

  const users = await getAllUsers();

  const proUsers = users?.filter(user=> user?.Userapilimit?.plan === UserPlan.Pro);

  return (
    <div
        className='
        cursor-pointer
        flex 
        bg-[#080f25]  h-[180px] rounded-md hover:bg-[#0c1125] ring-2 ring-purple-800
   '>
      <div 
       className="
        flex flex-col items-center justify-center w-full gap-4
       ">
          <div className="flex items-center">
              <span className='text-xl font-bold text-center text-zinc-300'>Pro Users</span>
          </div>
          <div id="upgrade2" className="w-24 h-14 rounded-md border-2 border-rose-800 flex items-center justify-center p-2">
              <span className='font-semibold text-xs text-gray-300'>
                  {proUsers?.length}
              </span>
          </div>
       </div>
     
   </div>
  )
}

export default ProUsers
