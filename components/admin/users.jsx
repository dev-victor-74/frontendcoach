import { getAllUsers } from "@/app/utils/actions/get-all-users";


const Users = async() => {
    
    const users = await getAllUsers();

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
              <span className='text-xl font-bold text-center text-zinc-300'>Users</span>
          </div>
          <div className="w-24 h-14 rounded-md border-2 border-green-800 bg-lime-900 flex items-center justify-center p-2">
              <span className='font-semibold text-xs text-gray-300'>
                  {users?.length}
              </span>
          </div>
       </div>
     
   </div>
  )
}

export default Users
