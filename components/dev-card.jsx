"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const DevCard = ({user}) => {

     const router = useRouter();
     const onClick = ()=>{
       return router.push(`/portfolio/${user?.id}`);
     }
  return (
    <div onClick={onClick} className='flex flex-col px-3 py-2 bg-[#080f25] hover:bg-[#0c1125] ring-2 ring-purple-900 gap-3 rounded-sm cursor-pointer hover:scale-[1.02] transition duration-200'>
        <div className="w-full flex items-center gap-[6px] px-2">
             <div className="w-[45px] h-[45px] rounded-full ring-2 ring-purple-500 relative">
                 <Image
                   fill
                   src={user?.profile?.profileurl?user?.profile?.profileurl : user?.image}
                   alt={user?.profile?.userName? user?.profile?.userName: user?.name}
                   priority
                   sizes='50px 48px'
                   className='rounded-full object-cover'
                 />
             </div>
             <div className="flex flex-col">
                 <h3 className='text-sm font-semibold text-zinc-300'>
                    {
                        user?.profile.userName? user?.profile?.userName: user?.name
                    }
                 </h3>
                 <span id='upgrade2' className='text-xs font-semibold px-[6px] py-[2px] rounded-full text-zinc-100'>Ready for work</span> 
             </div>
        </div>
        <div className="w-full flex items-center">
             <div className='text-center text-zinc-200 text-sm font-normal'>
                {user?.profile?.profileDesc}
             </div>
        </div>
    </div>
  )
}

export default DevCard;
