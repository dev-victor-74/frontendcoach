import { getAllUsers } from "@/app/utils/actions/get-all-users"
import { JOBREADYPOINTS } from "@/app/utils/constants";
import DevCard from "@/components/dev-card"

const HireDevelopersPage = async() => {

    const users = await getAllUsers();
    const jobReadyUsers = users?.filter((user)=>user.projects?.length >= JOBREADYPOINTS)


  return (
    <div className='w-full h-full'>
        <div className="w-[90%] mx-auto flex flex-col gap-8 mt-8">
             <h1 className='font-bold text-3xl text-center md:text-6xl text-zinc-200'>Hire Our <strong className='text-purple-800 text-3xl md:text-6xl'>Top</strong> <strong className='text-purple-800 text-3xl md:text-6xl'>Developers</strong></h1>
             <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                 {
                  jobReadyUsers?.map(user=>(

                      <DevCard user ={user} key={user?.id}/>
                  ))
                 }
             </div>
        </div>
    </div>
  )
}

export default HireDevelopersPage
