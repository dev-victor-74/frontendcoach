"use client"

import { useState } from "react"
import { MdAdd} from "react-icons/md"

const Faq = () => {

   const[first, setFirst] = useState(false);
   const[second, setSecond] = useState(false);
   const[third, setThird] = useState(false);

  return (

    <section className='w-full flex flex-col mt-3'>
       <h1 className='text-4xl text-zinc-200 font-bold text-center'>Frequently asked questions</h1>
       <div className="w-full max-w-[900px] md:w-[50%] mx-auto mt-4">
          <div className="flex flex-col gap-2 w-full px-6">

             <div className="w-full flex items-center justify-between mt-2 border-b border-b-zinc-400 border-t border-t-zinc-400 py-4 px-5">
                 <div className="flex flex-col gap-2">
                 <h2 className="font-bold ml-1 text-sm md:text-xl text-zinc-200">What is frontendarena?</h2>
                 {first &&
                 <h2 className="font-bold ml-1 text-sm md:text-xl text-zinc-200">What is frontendarena?</h2>
                 }
                 </div>
                 {first ?
                 <span 
                 onClick={()=>setFirst(false)}
                 className="px-1 py-1 rounded-full font-bold text-2xl cursor-pointer text-white">-</span>
                  :
                  <MdAdd size={30}
                  onClick={()=>setFirst(true)}
                  className="font-bold text-2xl cursor-pointer text-white"/>}
             </div>

             <div className="w-full flex items-center justify-between mt-2 border-b border-b-zinc-400 pb-3 px-5">

              <div className="flex flex-col gap-2">
                 <h2 className="font-bold ml-1 text-sm md:text-xl text-zinc-200 w-[80%]">
                    Do i need any prio knowledge of web development before taking the challenges?
                 </h2>
                 {second &&
                    <h2 className="font-bold ml-1 text-sm md:text-xl text-zinc-200 w-[80%]">
                    Do i need any prio knowledge of web development before taking the challenges?
                 </h2>
                 }
                 </div>
                 {second? 
                  <span 
                  onClick={()=>setSecond(false)}
                 className="px-1 py-1 rounded-full font-bold text-2xl cursor-pointer text-white">-</span>
                 :
                  <MdAdd size={30}
                  onClick={()=>setSecond(true)}
                 className="font-bold text-2xl cursor-pointer text-white w-[5%]"/>}
             </div>
             
             <div className="w-full flex items-center justify-between mt-2 border-b border-b-zinc-400 pb-3 px-5">
              <div className="flex flex-col gap-2">
                 <h2 className="font-bold ml-1 text-sm md:text-xl text-zinc-200">
                    How many challenges can i build?
                 </h2>
                 {third &&
                   <h2 className="font-bold ml-1 text-sm md:text-xl text-zinc-200">
                   How many challenges can i build?
                  </h2>
                 }
                 </div>
                 {third ?
                  <span 
                   onClick={()=>setThird(false)}
                  className="px-1 py-1 rounded-full font-bold text-2xl cursor-pointer text-white">-</span>
                 :<MdAdd size={30} 
                  onClick={()=>setThird(true)}
                 className="font-bold text-2xl cursor-pointer text-white"/>}
             </div>

          </div>
       </div>
    </section>
  )
}

export default Faq
