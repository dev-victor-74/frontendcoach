"use client"

import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { MdThumbUpAlt } from 'react-icons/md';

const Palettes = () => {

  const[colors, setColors]= useState([]);
  const[isCopied, setisCopied]=useState(false);

  const arr = new Array(20).fill(1);


  const onGeneratePalettes=()=>{

    const randomHex = arr.map(ar=>{
       const c = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6,"0")}`
       return c
     })
     setColors(randomHex);
  }
  
  useEffect(()=>{
     onGeneratePalettes();

     return ()=>onGeneratePalettes();
  },[])

  const onCopy=(value)=>{

    navigator.clipboard.writeText(value);
    setisCopied(true);
    toast.success("copied!");

     setTimeout(()=>{
       setisCopied(false);
     },500);
  }

   
  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-10 px-2 py-1 rounded-sm shadow-sm bg-slate-50 mt-2 flex items-center justify-between">
          <button 
            onClick={onGeneratePalettes}
            className='px-4 py-2 rounded-sm text-zinc-200 text-xs bg-blue-500 hover:bg-blue-400 active:bg-blue-700 font-semibold'>
             Refresh
          </button>
          {isCopied &&
            <div className="flex items-center justify-center text-xs font-semibold
              text-zinc-100 bg-green-500 rounded-full px-3 py-2 gap-2 animate-bounce">
                  <MdThumbUpAlt color='#fff' size={16}/>
                  <span>Copied</span>
            </div>
          }
          <span 
            className='select-none py-1 px-3 rounded-full bg-black text-xs font-semibold text-white'>
            Click on color to copy
          </span>
      </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-2'>
            {
              colors.map((color,i)=>(
                <div key={i} 
                className="flex flex-col bg-slate-800 rounded-sm px-[1px] py-[1px] group h-[85px] hover:scale-[1.05] cursor-pointer transition duration-200">
                      <div 
                         onClick={()=>onCopy(color)}
                         className="w-full h-[100%] bg-yellow-500 active:border-[2px] active:border-green-500"
                         style={{background:color}}
                       />
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Palettes
