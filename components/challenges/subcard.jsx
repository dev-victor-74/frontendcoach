"use client"

import Image from "next/image"
import Link from "next/link";



const SubCard = ({data}) => {

   const {user} = data || {}

   const href =`/submissions/${data?.id}`

  return (
    <div className='rounded-[4px] ring-[1px]  bg-[#171444] hover:scale-[1.02] transition duration-500 shadow-lg ring-blue-950 pb-2 relative overflow-hidden p-[2px]' >
        <Link className="w-full absolute h-[200px] top-0 right-0" href={href}>
           
        </Link>
        <h3 className="text-lg text-center font-semibold text-zinc-200 mt-2">{data?.name}</h3>
        <Link href={href} className="bg-blue-800 px-3 py-2 mt-2 w-[70%] items-center justify-center rounded-full flex self-center text-xs text-zinc-200 mx-auto">
          View More
        </Link>
      <div
       className="w-full h-[60px] flex justify-center px-2 flex-col gap-2 pb-1"
      >
       <div className="w-full flex mx-auto items-center justify-between">
          <div className="flex items-center gap-2 mx-auto relative">
              <div className="h-8 w-8 rounded-full ring-1 ring-zinc-300 relative">
                <Image
                  src={user?.profile?.profileurl? user?.profile?.profileurl:user?.image}
                  alt={user?.profile?.userName? user?.profile?.userName : user?.name}
                  fill
                  sizes="40px 38px"
                  priority
                  className="rounded-full object-cover"
                />
              </div>
            <span className="text-sm font-medium text-gray-300" >
                {user?.profile?.userName?user?.profile?.userName : user?.name}
            </span>
        </div>
       </div>
      </div>
    </div>
  )
}

export default SubCard
