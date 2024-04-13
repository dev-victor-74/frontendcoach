import { getCurrentUser } from '@/app/utils/actions/get-current-user'
import SettingsForm from '@/components/settings-form'

const Settings = async ()=>{

  const currentUser = await getCurrentUser();


  return (
    <div className='w-full h-screen overflow-y-auto px-[2px] md:px-3' id='lay'>
       <div className="w-full md:w-[75%] mx-auto h-full flex flex-col gap-2">
          <h1 className='font-bold text-4xl text-center text-zinc-200 mt-5'>Account Settings</h1>
          <SettingsForm currentUser = {currentUser}/>
       </div>
    </div>
  )
}

export default Settings
