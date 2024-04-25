
import Bio from '@/components/bio';
import ProBox from '@/components/pro-box';
import ProfileItems from '@/components/profile-items';
import ProfileAvatar from '@/components/profile-avatar';
import { getCurrentUser } from '@/app/utils/actions/get-current-user';
import UserLinks from "@/components/user-links";


const Profile = async() => {
 
  const currentUser = await getCurrentUser();
 

  return (

    <div className=' w-full md:px-10 px-[12px] h-full'>
        <div className="w-full py-3  ">
             <h1 className='text-start gap-2 text-xl md:text-2xl text-zinc-300 font-bold'>
                Profile
             </h1>
        </div>
      <div className="w-full mt-2 flex gap-4 justify-start">
        <ProfileAvatar currentUser ={currentUser} />
      </div>
      <div className="w-[100%] md:w-[90%] flex m-[auto] md:mx-0 flex-col mt-[18px] gap-2">
            <ProfileItems profile={currentUser?.profile}/>
           <UserLinks profile={currentUser?.profile} currentUser={currentUser} />
      </div>
      <Bio currentUser = {currentUser}/>
      <ProBox credit={currentUser?.Userapilimit}/>
    </div>
  )
}

export default Profile
