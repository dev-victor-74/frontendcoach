"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import useModalStore from '@/lib/modal-store'
import { IoExpand } from "react-icons/io5";


import clsx from 'clsx'
import { MdCopyAll } from 'react-icons/md'
import { useRouter } from 'next/navigation';
import Loading from '../status/loading';


const SingleChallengeCard = ({data}) => {


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
    const{onOpen} = useModalStore();
    const router = useRouter();

    const onClick =()=>{
        router.push(`/code/${data.id}`);
    }

  useEffect(()=>{
    setisMounted(true);
 },[])

 if(!isMounted){
   return <Loading/>
 }

  return (
    <div className="w-full flex justify-center flex-col items-center gap-8 mb-12">
    <div className='w-full md:w-[85%] ring-2 ring-purple-800 rounded-md flex flex-col bg-[#0b0924] mt-8'>
        <div className="flex flex-col md:flex-row items-center md:h-[550px] lg:h-[500px] w-full p-2 md:px-5 md:py-5">
             <div className="w-full md:w-[55%] h-full flex items-center justify-center rounded-md bg-slate-50 overflow-hidden pb-1 relative px-4">
                <div className="absolute top-0 right-0 w-full h-full"></div>
                     <Image
                      src={data?.displayImg}
                      height={200}
                      width={550}
                      priority
                    //   layout='responsive'
                      alt={data?.name}
                      className='rounded-sm object-contain overflow-hidden mx-auto hover:scale-[1.02] transition duration-500 cursor-pointer'
                     />
                      <div 
                         onClick={()=>onOpen("challenge-modal", data?.desktopImgs)}
                         className="h-6 w-6 flex items-center justify-center rounded-md bg-gray-400/50 cursor-pointer absolute right-0 bottom-0">
                        <IoExpand size={20} className='text-zinc-950'/>
                      </div>
              </div>
             <div className="w-full md:w-[45%] px-5 py-5 h-full">
                
                 {data && <div className="w-full h-full flex flex-col gap-[10px] justify-center">
                    <div className="w-full flex items-center justify-between">
                        <h3 className='font-bold text-3xl text-zinc-200'>
                            {data?.name}
                        </h3>
                        {data?.challengeType ==="Pro"?
                        <div id='upgrade2' className="bg-blue-500 py-1 rounded-full w-[35px]
                          font-semibold flex items-center justify-center right-5 h-[25px]">
                          <span className='text-zinc-200 text-xs text-center'>
                             Pro
                          </span>
                        </div>:
                         <div className="bg-blue-500 py-1 rounded-full w-[35px] h-[25px]
                         font-semibold flex items-center justify-center right-5">
                         <span className='text-zinc-200 text-xs text-center'>
                            Free
                         </span>
                       </div>
                        }
                    </div>

                    <div className="w-full flex justify-between mt-3 flex-wrap gap-3">
                       
                        <div className="flex items-center gap-2">
                            <div 
                                className = {clsx("flex items-center justify-center bg-orange-800 px-3 text-zinc-200 py-1 rounded-full text-sm font-semibold", data?.level === "Beginner"?"bg-green-800":"bg-orange-700")}>
                                {data?.level}
                            </div>
                              <div 
                                className = {clsx("flex items-center font-semibold text-xs justify-center px-3 text-zinc-200 py-[2px] rounded-full",difficultyColor[data?.difficultyLevel])} >
                                {data?.difficultyLevel.toLowerCase()}
                             </div>
                        </div>
                        <div className="flex items-center gap-2">
                            {data?.skillsRequired.map((skill,i)=>
                                (
                                <span key={i}
                                className={clsx('w-max px-2 py-[3px] font-semibold text-xs text-center rounded-sm  text-zinc-200',skillColor[skill])} >
                                    {skill}
                                </span>
                                ))
                            }
                        </div>
                   </div>
            

                   <div className="w-full flex flex-col gap-2">
                      <p className='text-sm text-zinc-200 font-medium'>
                      You are to build out this challenge and get it to look as close as possible to the challenge file.
                      </p>
                      <p className='text-sm text-zinc-200 font-medium'>
                      Your should have a clean and intuitive user interface.
                      </p>
                      <p className='text-sm text-zinc-200 font-medium'>
                       Add animations to your project to show all hover states.
                      </p>
                      <p className='text-sm text-zinc-200 font-medium'>
                      Prioritize creativity over pixel-perfect accuracy and showcase your developer ingenuity.
                      </p>
                   </div>
                   {(data?.solvers >= 3 ) && 
                   <div className="w-full bg-[#230833] px-2 py-2 flex items-center rounded-sm gap-2">
                      <span className='text-xs font-medium text-zinc-300'>
                         Solved by
                      </span>
                      <span className='text-xs font-medium text-zinc-300'>{data?.solvers - 1} others</span>
                   </div>
                  }
                    <button
                        onClick={onClick}
                        className='w-full bg-blue-800 text-zinc-100 font-semibold py-2 hover:bg-blue-700 rounded-md'
                    >
                        Start Challenge
                    </button>
                </div>
        }
        </div>
        </div>
    </div> 
   
    </div>
  )
}

export default SingleChallengeCard
