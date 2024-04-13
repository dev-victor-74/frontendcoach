"use client"

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdCheck, MdCopyAll } from 'react-icons/md';

const BoxShadow = () => {
  
   const[shadowModal, setShadowModal] = useState("");
   const[shadowCopy, setShadowCopy] = useState("");
   const[isCopied, setIsCopied] = useState(false);

   const[shadow, setShadow] = useState({
     x:3,
     y:3,
     blur:1,
     spread:0,
     color:"#c1beca"
   });

   const onChange=(e)=>{
     setShadow(prev=>{
        return{...prev,[e.target.name]:e.target.value}
     })
   }

   const generateShadow=()=>{
      const s =`${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`
      const c =`box-shadow: ${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`

      setShadowModal(s)
      setShadowCopy(c)
   }

   const onCopy=()=>{
     navigator.clipboard.writeText(shadowCopy);
     setIsCopied(true);
     toast.success("copied!")

     setTimeout(()=>{
       setIsCopied(false)
     },1000)
   }

   useEffect(()=>{
      generateShadow()

      return()=>generateShadow()
   },[shadow.blur, shadow.x, shadow.y,shadow.spread,shadow.color])

  return (

    <div className='w-full flex flex-col gap-2'>
    <div className="w-full flex flex-col-reverse md:flex-row items-center mt-2 justify-between px-4">
      <div className="w-full md:w-[45%] flex flex-col px-2 justify-center">

      <div className="text-sm font-semibold">Color</div>
          <div className="w-full flex border items-center gap-2 px-2 py-[6px] shadow-sm rounded-sm">
              <input type="color" 
                  className='bg-transparent border-none rounded-sm h-[30px] focus:outline-none'
                  name='color'
                  value={shadow.color}
                  onChange={onChange}
              />
              <input type="text" value={shadow.color} name='color' onChange={onChange} 
              className='w-full h-[30px] focus:outline-none rounded-sm text-sm font-medium'/>
          </div>
      
          <div className="flex flex-col mt-4">
              <div className="text-sm font-semibold">Direction</div>
              <div className="flex flex-col justify-center gap-[6px] pb-2 mt-2 px-2 py-1 rounded-sm shadow-sm border">
                  <span className='text-xs font-semibold'>offset-x</span>
                  <input type="range" min="-100" max='100' step="0.5" name='x'
                    onChange={onChange}
                  className='h-[6px] bg-indigo-950 cursor-pointer' />
              </div>
              <div className="flex flex-col justify-center gap-[6px] pb-2 mt-2 px-2 py-1 rounded-sm shadow-sm border">
                  <span className='text-xs font-semibold'>offset-y</span>
                  <input type="range" min="-100" max='100' step="0.5" name='y' 
                    onChange={onChange}
                  className='h-[6px] bg-indigo-950 cursor-pointer' />
              </div>
              <div className="flex flex-col justify-center gap-[6px] pb-2 mt-2 px-2 py-1 rounded-sm shadow-sm border">
                  <span className='text-xs font-semibold'>Blur Radius</span>
                  <input type="range" min="0" max='50' step="0.5" name='blur'
                  onChange={onChange}
                  className='h-[6px] bg-indigo-950 cursor-pointer' />
              </div>
              <div className="flex flex-col justify-center gap-[6px] pb-2 mt-2 px-2 py-1 rounded-sm shadow-sm border">
                  <span className='text-xs font-semibold'>Spread Radius</span>
                    <input type="range" min="0" max='100' step="0.5"name='spread'
                    onChange={onChange} className='h-[6px] bg-indigo-950 cursor-pointer' />
              </div>
            </div>
          
            </div>                  
            <div className="w-full md:w-1/2 h-[350px] flex items-center justify-center">
                <div className="w-[200px] h-[150px] bg-blue-500 rounded-sm" style={{boxShadow:shadowModal}} />
            </div>
        </div>
        <div className="w-full bg-slate-100 shadow-md h-[40px] px-5 py-2 rounded-sm flex items-center justify-between">
            <div className="text-sm font-medium text-zinc-900">
               {shadowCopy}
            </div>
            {isCopied?
              <MdCheck size={18} color='green' className='cursor-pointer'/>
              :
              <MdCopyAll size={20} color='blue' className='cursor-pointer' onClick={onCopy}/>
             }
        </div>
    </div>

  )
}

export default BoxShadow
