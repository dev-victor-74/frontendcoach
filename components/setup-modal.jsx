"use client"

import { clsx } from "clsx";
import { MdArrowRightAlt } from "react-icons/md";

const SetupModal = (
  {level,
   handleLevel,
   handleSubmit,
   isLoading, 
   name
  }) => {


  return ( 
    <div className="w-full h-full px-2 flex items-center justify-center bg-zinc-100/20">
      <div className="w-full h-full md:w-[600px]  bg-white rounded-md px-3 py-2">
         <div className="w-full h-full rounded-md ring-2">
             <div className="w-[90%] mx-auto py-3 flex flex-col">
                 <p className="text-center text-[18px] text-zinc-800 mt-4 font-bold">Hi <span className="font-bold text-xl text-zinc-950">{name}</span> what best describes you?</p>
                  <p className="text-[16px] font-semibold text-center text-zinc-800">
                    This will help us set up challenges that matches your level</p>
                    <div className="w-full flex justify-center md:justify-start mt-5">
                        <div className="text-[15px] text-gray-800 font-bold" >Please, select one from the two options</div>
                    </div>

                    <form onSubmit={handleSubmit && handleSubmit} className=" flex flex-col w-full gap-3">

                        <div className="w-full flex-col flex md:flex-row items-center md:justify-between gap-4 mt-2">
                            <label className='cursor-pointer w-full' >
                                <input type="radio" value='Beginner' className='peer sr-only' name='level' onChange={e=>handleLevel(e.target.value)} />
                                <div 
                                className="w-full h-[70px] bg-white rounded-md border-[2px] border-zinc-600
                                ring-2 ring-transparent peer-checked:text-sky-600 
                                peer-checked:ring-sky-400 peer-checked:ring-offset-2 peer-checked:border-0 px-2 py-[2px] ">
                                    <div className="w-full h-full flex flex-col gap-1 justify-center">
                                    <div className="font-semibold text-[16px]">Beginner</div>
                                    <div className="text-[13px] font-semibold">Already have some knowledge
                                  </div>
                                    </div>
                                </div>
                            </label>

                            <label className='cursor-pointer w-full' >
                                <input type="radio" value='Intermediate' className='peer sr-only' name='level' onChange={e=>handleLevel(e.target.value)} />
                                <div 
                                className="w-full h-[70px] bg-white rounded-md border-[2px] border-zinc-600
                                ring-2 ring-transparent peer-checked:text-sky-600 
                                peer-checked:ring-sky-400 peer-checked:ring-offset-2 peer-checked:border-0 px-2 py-1">
                                    <div className="w-full h-full flex flex-col gap-1 justify-center">
                                    <div className="font-semibold text-[16px]">Intermediate</div>
                                    <div className="text-[13px] font-semibold">Already have some knowledge
                                  </div>
                                    </div>
                                </div>
                            </label>
                       </div>
                        
                         <button type="submit"
                          disabled ={!level}
                          className= {clsx("w-full px-1 py-2 flex items-center justify-center gap-3 rounded-sm text-zinc-200 font-semibold text-sm disabled:cursor-not-allowed",isLoading? "bg-blue-800 shadow-md opacity-70":" bg-blue-800")}
                         >
                             <span>Continue</span>
                             <MdArrowRightAlt size={26}/>
                         </button>
                    </form>
             </div>
         </div>
      </div>
      
    </div>
  )
}

export default SetupModal
