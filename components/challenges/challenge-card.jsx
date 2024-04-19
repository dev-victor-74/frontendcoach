"use client"

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'
import useModalStore from '@/lib/modal-store'

const ChallengeCard = ({item,currentUser}) => {

  const{onOpen} = useModalStore();

  console.log(item)
  const skillColor={
    html:"bg-orange-800",
    css :"bg-blue-900",
    js  :"bg-yellow-600"
  }
  const difficultyColor={
    EASY:"bg-lime-800",
    MEDIUM :"bg-orange-800",
    HARD  :"bg-rose-600"
  }
  const[isMounted, setisMounted] = useState(false);
  const router = useRouter()

  const handleRouting=(type)=>{

    if(!currentUser) return;

    if((type === "Pro") && (currentUser?.Userapilimit?.plan ==="Free")){
      return onOpen("pro-modal")
    }

    return router.push(`/challenges/${item?.id}`)
  }

  useEffect(()=>{
    setisMounted(true);
 },[])

 if(!isMounted){
   return null;
 }

  return (
    <div className='rounded-sm ring-[3px] shadow-lg bg-[#171444] hover:scale-[1.02] transition duration-500 ring-blue-950 pb-2 relative overflow-hidden'>
        {item?.challengeType === "Pro"? <div 
           className="w-[30px] font-semibold text-xs text-zinc-200 rounded-full left-1 top-1 h-[25px] py-1 flex items-center justify-center text-center absolute bg-blue-500" id='upgrade2'>
             <span>Pro</span>
           </div> : 
         <div 
         className="w-[33px] font-semibold text-xs text-zinc-200 rounded-full left-1 top-1 h-[25px] py-1 flex items-center justify-center absolute bg-blue-500">
             <span>Free</span>
         </div>
        }  
        <div onClick={()=>handleRouting(item?.challengeType)}
           className="w-full h-full flex items-center cursor-pointer justify-center absolute bg-white/5"
        />  
        <div
        className="w-full h-[300px] rounded-sm cursor-pointer bg-slate-300">
           <Image
             height={200}
             width={400}
             src={item?.displayImg}
             alt={item?.name}
             priority
             className='h-full object-fill hover:scale-[1.01] transition duration-500 mx-auto'
           />
        </div>
        <div className="w-full h-full flex flex-col  gap-2">

           <div className="flex items-center justify-between px-2 w-full mt-2">
                <Link href="/challenges/123" className='font-semibold text-[20px] cursor-pointer text-zinc-200'>
                    {item?.name}
                </Link>
                
           </div>

           <div className="w-full flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <div 
                    className = {clsx("flex items-center font-semibold text-xs justify-center  px-2 text-zinc-200 py-[2px] rounded-full",item?.level === "Beginner"?"bg-green-800" :"bg-orange-700")} >
                    {item?.level}
                </div>
                <div 
                    className = {clsx("flex items-center font-semibold text-xs justify-center px-3 text-zinc-200 py-[2px] rounded-full",difficultyColor[item?.difficultyLevel])} >
                    {item?.difficultyLevel.toLowerCase()}
                </div>
              </div>
               <div className="flex items-center gap-2">
                   {item?.skillsRequired.map((skill,i)=>(

                     <span key={i}
                     className={clsx('w-max px-2 py-[3px] font-semibold text-xs text-center rounded-sm  text-zinc-200',skillColor[skill])} >
                          {skill}
                    </span>
                    ))
                    }
                </div>
           </div>
        </div>
    </div>
  )
}

export default ChallengeCard
