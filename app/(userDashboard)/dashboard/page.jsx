import { getCurrentUser } from '@/app/utils/actions/get-current-user';
import { redirect } from 'next/navigation';
import { UserRole } from "@prisma/client";


import CurrentStreak from '@/components/dashboard-components/current-streak';
import LeaderBoard from '@/components/dashboard-components/leader-board';
import ProfileStrength from '@/components/dashboard-components/profile-strength';
import ProjectCompleted from '@/components/dashboard-components/project-completed';
import Settings from '@/components/dashboard-components/settings';
import StartChallenge from '@/components/dashboard-components/start-project';
import ProBox from '@/components/pro-box';
import SetUpModalProvider from '@/components/modals/set-up-modal';
import UncompletedProjects from '@/components/dashboard-components/uncompleted-projects';
import { getMyProjects } from '@/app/utils/actions/get-my-projects';


const DashBoardpage = async() => {

  const currentUser = await getCurrentUser()
  const{profile} = currentUser ||{};


  if(!currentUser){
    return redirect("/")
  }


  if(currentUser && !currentUser.profile){
    return <SetUpModalProvider show = {true}/>
  }

  if(currentUser?.role === UserRole.ADMIN ){
    return redirect("/admin/dashboard")
  }

  const myProjects = await getMyProjects();

  return (

    <div className='w-full flex flex-col items-center h-full px-[10px] md:px-4'>
      <div className="w-full flex items-center mb-5 mt-5">
          <div className='w-full font-bold flex gap-2 tracking-wide text-zinc-300 text-[26px]'>
             <span
             >Welcome</span>
             <span className='text-3xl text-indigo-400'>
              {(!profile?.userName)?
              currentUser?.name : profile?.userName
            }
            </span>
          </div>
      </div>
       <div 
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CurrentStreak level = {profile?.level}/>
          <ProjectCompleted projectNumber={myProjects?.length}/>
          <ProfileStrength points ={myProjects?.length}/>
          {/* <LeaderBoard/> */}
          <StartChallenge/>
       </div>
       <UncompletedProjects/>
      <ProBox credit={currentUser?.Userapilimit}/>
      <div className="w-full flex items-center gap-2 mb-4">
        <Settings/>
      </div>
    </div>
  )
}

export default DashBoardpage
